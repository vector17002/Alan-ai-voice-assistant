import './App.css';
import {useEffect, useState} from 'react';
import alanBtn from '@alan-ai/alan-sdk-web';
import axios from 'axios';
import NewsCards from './components/Cardss.js/NewsCards';
import Header from './components/header/header';



function App() {
  const [sources,setSources] = useState([]);
  const alanKey = '81338d3b5844c523112a48f449448d082e956eca572e1d8b807a3e2338fdd0dc/stage';
  useEffect(()=>{
   alanBtn({ 
      key:alanKey,
      onCommand:({command , savedArticles})=>{
        if(command === 'newHeadlines'){
        const promise = axios.get('https://newsapi.org/v2/top-headlines?country=in&apiKey=d0a155e11e3a440eab22c44072075ceb');
        promise.then((result)=>{ 
            setSources(result.data.articles);
            }).catch((err)=>{
            console.log(err);
           })
       }
  
      }
    })

   },[])
  return (
    <div className="App">
            <Header/>
            <div className="cards">
            <NewsCards nArticles = {sources}/>
            </div>
    </div>
  );
}

export default App;
