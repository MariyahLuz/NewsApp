import React from 'react'
import "./NewsCard.css";
export default function NewsCard({title,SampleImage,body,link,time,author}) {
  return (
    <div className='card-container'>
    <div className="image-container">
      <img
       style={{ cursor: "pointer"}}
       src ={SampleImage}
      alt = ''/>
    </div>
    <div className="card-content">
       <div className="Newscard-title">

      <h5>{title.length>40?`${title.substring(0,40)}...`:title}</h5>

        </div>

    <div className= "card-body">
         
           <p>{body.length>100?`${body.substring(0,100)}...`:body}</p> 
              <div className='time'>
                   <p className=''>{time}</p>
                   <p className=''>{author}</p>
              </div>
    </div>

    </div>
   
    <div className= "btn">
    <button>
        <a href={link}>
           Read More
        </a>
        </button>
    </div>


    </div>
  )
}
