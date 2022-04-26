
import './App.css';
import axios from 'axios'
import {useState, useEffect } from 'react';
import NavMak from './components/NavMak';
import NewsCard from "./components/cards/NewsCard"
import moment from "moment"
import {newsClient, weatherClient} from './app/apiClients';
import {BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Business from "./components/pages/Business";
import LocalNews from './components/pages/LocalNews';
import GlobalNews from './components/pages/GlobalNews';
import Entertainment from './components/pages/Entertainment';
import SportsNews from './components/pages/SportsNews';
import Carou from './components/carousel/Carou';
import Politics from './components/pages/Politics';
import Footer from './components/Footer'
import Weather from './components/pages/Weather';
import SignUp from "./components/Footer"


function App() {
  const [category, setCategory] = useState("general");
  const [newsArray,setNewsArray] = useState([]);
  const [localNews,setLocalNews] = useState(null);

  return (
    
    <div className="App">
     
      <NavMak/>
      
          <Carou />
        

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
      
     <Router >
       <Routes>
       {/* <Route path="/" element={<Home/>}/> */}
         <Route path="/business" element={<Business/>}/>
         <Route path="/" element={<LocalNews/>}/>
         <Route path="/global-news" element={<GlobalNews/>}/>
         <Route path="/entertainment" element={<Entertainment/>}/>
         <Route path="/Sports" element={<SportsNews/>}/>
         <Route path="/Politics" element={<Politics/>}/>
         <Route path="/weather" element={<Weather/>}/>
         
       </Routes>
       
     </Router>
     

     <Footer/>
      
    </div>
    
    
  );
}

export default App;
