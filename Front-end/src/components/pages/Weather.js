import React, { useState} from 'react'
import Axios from "axios";

const Weather = () => {
    const [location, setLocation] = useState(null)
    const [weatherdata, setWeatherdata] = useState(null)


const sendLocation = () => {
    console.log("location =>", location)
    Axios.post('http://localhost:8000/api/weather/', {
        'location':location
    }, {
        headers:{
            "Content-Type": 'application/json'
        },
    }).then((response) => {
      console.log("response=", response.data);
      setWeatherdata(response.data)
      console.log("weather-data", weatherdata);
    })
      .catch(error => console.err(error))
}
const getLocation = () => {
    sendLocation()
 }
     
  return (
    <div className='weather' style={{marginTop: 20, marginLeft:150, marginRight: 156,justifyContent:'center' , backgroundImage:"url(https://animesher.com/orig/1/149/1493/14937/animesher.com_cloud-sun-sunny-1493751.gif)", backgroundRepeat: 'no-repeat', backgroundSize:'cover', backgroundPosition:'center center'}}>
        <div className="search" style={{paddingLeft:90}}>
      <input className='input' style={{width: 900, height: 50}} type="text" value={location} placeholder="enter your location" onChange={ event => setLocation(event.target.value)}/>
      <button className='button' style={{width:300, height: 50}} onClick={getLocation} >Search</button>
    </div>

    { weatherdata && <div className="information" style={{display: 'flex', justifyContent: 'space-between', flexDirection:'column', marginLeft:500}}>
       <h3 className="location" style={{padding:100, fontSize: 60}}>{weatherdata.location}</h3>
       <h3 classNmae="time"style={{padding:100,fontSize: 40}}>{weatherdata.time}</h3> 
       <h3 className='info'style={{padding:100, fontSize: 40}}>{weatherdata.info}</h3>    
    </div>  }
    </div>
  )
}

export default Weather