import React, {useEffect, useState} from 'react'
import {newsClient} from '../../app/apiClients';
import NewsCard from "../cards/NewsCard";
import moment from "moment";

const LocalNews = () => {
    const [localNews,setLocalNews] = useState(null);
    
    useEffect(() => {
        newsClient.get('/latest_headlines', {
          countries: 'ug',
          page_size: 48,
          //topic: 'politics',
          
        }).then((response)=>{
          console.log(response.data.articles)
          setLocalNews(response.data.articles)
        })
      
        
      }, [])
  
      if(!localNews) return null
  
  return (
    <div className='news'>
      
    {
  localNews?.map(
      (news)=>
        <NewsCard
        title={news.title}
        SampleImage={news.media}
        body ={news.summary}
        link={news.link}
        author={news.author}
         time={moment(news.published_date).fromNow()}
      />

      
  )
 
}
    </div>
  )
}

export default LocalNews