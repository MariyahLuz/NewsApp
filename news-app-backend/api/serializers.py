from .models import User, Weather
from rest_framework import serializers
from django.contrib.auth import authenticate

class RegisterSerializer(serializers.ModelSerializer):

	password = serializers.CharField(max_length=128, min_length=8, write_only=True)
	token = serializers.CharField(max_length=255, read_only=True)

	class Meta:
		model = User
		fields = ['email', 'username', 'password', 'token']

	def create(self, validated_data):
		return User.objects.create_user(**validated_data)


class LoginSerializer(serializers.Serializer):
	email = serializers.CharField(max_length=255)
	username = serializers.CharField(max_length=255, read_only=True)
	password = serializers.CharField(max_length=128, write_only=True)
	token = serializers.CharField(max_length=255, read_only=True)

	
	def validate(self, data):
		email = data.get('email', None)
		password = data.get('password', None)

		if email is None:
			raise serializers.ValidationError("email is requird to log in")

		if password is None:
			raise serializers.ValidationError("password is required to log in")

		user = authenticate(username=email, password=password)

		if user is None:
			raise serializers.ValidationError("A user with this email and password was not found")

		if not user.is_active:
			raise serializers.ValidationError("This user has been deactivated")

		return {
		  'email': user.email,
		  'username': user.username,
		  'token': user.token
		}




class UserSerializer(serializers.ModelSerializer):
	password = serializers.CharField(
		 max_length=255,
		 min_length=8,
		 read_only=True
		)

	class Meta:
		model = User
		fields = ('email', 'username', 'password', 'token')
		read_only_fields = ('token','password')

	def update(self,instance, validated_data):

		password = validated_data.pop('password', None)

		for (key, value) in validated_data.items():
			setattr(instance, key, value)

		if password is not None:
			instance.set_password(password)

		instance.save()

		return instance


class WeatherSerializer(serializers.ModelSerializer):
	class Meta:
		model = Weather
		fields = "__all__"