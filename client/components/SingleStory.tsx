import React, {useState} from "react";
import { useSaveFavoriteMutation, useGetFavoritesQuery } from "../features/Favorites/redux/favorites-api-slice";

import { Box, Container, List } from "@mui/material";
import { textAlign } from "@mui/system";
export const SingleStory = ({id,title, description, source, image, url, publishedAt}) => {

    const [addNewFavorite, { isLoading }] = useSaveFavoriteMutation()
  id = id.replace(/[^a-zA-Z0-9 ]/g, '')
  console.log("newID", id)
  const userId = localStorage.getItem("userId")
 
    const [disable, setDisable] = React.useState(false);

  
    const onSaveFavoriteClicked = async () => {
          try {
              setDisable(true)
            await addNewFavorite( {userId, id,title, description, source, image, url, publishedAt, } ).unwrap()
          
          } catch (err) {
            console.error('Failed to save the post: ', err)
          }
      }
  return (
    
      <Box>
         <List>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{source.name}</p>
        <div>
          <img width="250px" src={image} />
        </div>
        <a href={url}>Read More...</a>
        <button disabled={disable} onClick={()=>onSaveFavoriteClicked()} style={{ margin: "10px" }}>
          Save
        </button>
       </List>
      </Box>
 
  );

  }
