import {  Typography, Link, Box, CardMedia, CardContent, CardActions, Button, Card } from "@mui/material";
import { useAuth } from "../../utils/hooks";
import { useSaveFavoriteMutation} from "../Favorites/redux/favorites-api-slice";
import React from "react";


const NewsList = ({data}) => {
    const userId = localStorage.getItem("userId")
    const [disable, setDisable] = React.useState(false);
    const [addNewFavorite, { isLoading }] = useSaveFavoriteMutation()

    const addToFavorites = async({description, title, url, urlToImage, publishedAt, source}) => {
        try {
        let id = title + publishedAt.replace(/[^a-zA-Z0-9 ]/g, '')
            await addNewFavorite({userId:userId, title, id, url, urlToImage, description, source, publishedAt  }).unwrap()
          
        } catch (error) {
            console.error('Failed to save the post: ', error)
        }
    }
    


    const altLink = "https://via.placeholder.com/200"
    console.log(data)
    return (
   <> 
    {data.map(n => (
<Card sx={{ maxWidth: 600, marginTop:2 , padding:1}}
key={n.title}
id={n.title + n.publishedAt}
>
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
        <Button onClick={() => addToFavorites({...n })} size="small">Add To Favorites</Button>
        <Button href={n.url} size="small">Read More</Button>
      </CardActions>
    </Card>
        ))}
 
 </>
    )
}


export default NewsList;