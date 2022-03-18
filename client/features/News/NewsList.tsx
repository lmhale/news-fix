import {  Typography, Link, Box, CardMedia, CardContent, CardActions, Button, Card } from "@mui/material";
import React from "react";

const NewsList = ({data}) => {
    const altLink = "https://via.placeholder.com/200"
    return (
   <> 
    {data.map(n => (
<Card sx={{ maxWidth: 600, marginTop:2 , padding:1}}>
    <CardMedia
    sx={{}}
        component="img"
        height="210"
        image={n.urlToImage ? n.urlToImage : altLink}
        alt={n.title}
      />
      <CardContent>
        <Typography gutterBottom variant="h6" component="div">
          {n.title}
        </Typography>
        <Typography variant="body2" color="text.secondary">
         {n.description}
        </Typography>
      </CardContent>
      <CardActions>
        <Button size="small">Add To Favorites</Button>
        <Button href={n.url} size="small">Read More</Button>
      </CardActions>
    </Card>
        ))}
 
 </>
    )
}


export default NewsList;