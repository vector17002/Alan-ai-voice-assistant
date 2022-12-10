import React from "react";
import NewsCard from "../Cards.js/NewsCard";
import {Grid ,Grow ,Typography} from '@material-ui/core';
import useStyles from './style';
const infoCards=[
   {color:'#00838f' , title: 'Want to get some latest news 📰' , text:'Give me some latest news 🗞️'},
   {color:'#4527a0' , title: 'Feeling lonely? You can talk to me 🥰 ' , text:'Say hello to me.. 😸'},
   {color:'#283593' , title:'Stuck with a basic maths problem 📖 ? I am here to help you 😸' , text:'What is 2+2.. 📑'}
]

const NewsCards =({nArticles})=>{
    const classes = useStyles();

    if(!nArticles.length){
      return(
         <Grow in>
         <Grid  className={classes.container} container alignItems="stretch" spacing={3}>
         {infoCards.map((infoCards)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} className={classes.infoCard}>
            <div className={classes.card} style={{backgroundColor : infoCards.color}}>
            <Typography variant='h5'>{infoCards.title}</Typography>
            <Typography variant='h6'>Try saying: <br/>{infoCards.text}</Typography>
            </div>

            </Grid>
         ))}
         </Grid>
         </Grow>
      )
    }
   return(
    <Grow in>
    <Grid  className={classes.container} container alignItems="stretch" spacing={3}>
         {nArticles.map((nArticles,i)=>(
            <Grid item xs={12} sm={6} md={4} lg={3} stlye={{display:'flex'}}>
            <NewsCard articles = {nArticles} i={i}/>
            </Grid>
         ))}
        </Grid>
    </Grow>
   )
}
export default NewsCards;