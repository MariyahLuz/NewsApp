import apisauce from 'apisauce';



const NEWS_API = 'https://api.newscatcherapi.com/v2';
const NEWS_API_KEY = 'sbEocvbdYgDbWsZnQ-G5MrRlPPtj1v_VZjB74xnuLeY';


const newsClient = apisauce.create({
  baseURL: NEWS_API,
  headers: {'x-api-key': NEWS_API_KEY},
  params: {lang: 'en'},
});


export {newsClient};