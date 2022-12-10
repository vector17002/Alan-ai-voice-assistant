import React from "react";
import {Card ,CardActions,CardActionArea,Cardcontent,CardMedia,Button,Typography, CardContent} from '@material-ui/core';
import useStyles from './style';
const NewsCard=({articles: {description , publishedAt  , source , title , url , urlToImage} , i})=>{
    const classes = useStyles();
    return(
        <Card className={classes.main}>
            <CardActionArea href={url} target="_blank">
                <CardMedia className={classes.media} image={urlToImage}/>
                <div className={classes.dev}>
                    <Typography variant="body2" color="textSecondary" component="h2">{(new Date(publishedAt)).toDateString()}</Typography>
                    <Typography variant="body2" color="textSecondary" component="h2">{source.name}</Typography>
                </div>
                <Typography gutterBottom variant="h5">{title}</Typography>
                <CardContent>
                    <Typography variant="body2" color="textSecondary" component="p">{description}</Typography>
                </CardContent>
            </CardActionArea>
            <CardActions className={classes.button}>
                <Button size="small" color="primary" href={url} target='_blank'>Learn More</Button>
                <Typography variant="h5" color="textSecondary">{i+1}</Typography>
            </CardActions>
        </Card>
    )
}
export default NewsCard;