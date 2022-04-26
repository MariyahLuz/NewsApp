import React, {useEffect, useState} from 'react'
import {newsClient} from '../../app/apiClients';
import NewsCard from "../cards/NewsCard";
import moment from "moment"

function SportsNews() {
    
    const [localNews,setLocalNews] = useState (null);
    
    useEffect (() => {
        newsClient.get('/search', {
          //countries: 'ug',
          q: 'sports',
          //category: 'business',
          
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

export default SportsNews