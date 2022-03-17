import React from "react"
import { useAuth } from "../redux-app/hooks";
import {useGetFavoritesQuery, useDeleteFavoriteMutation } from "../redux-app/features/favorites/favorites-api-slice";

const FavoritesPage = () => {
    
 
  let UI = localStorage.getItem("userId")

    const {data=[], isFetching, refetch } = useGetFavoritesQuery(UI)
    
    const [deleteFavorite] = useDeleteFavoriteMutation()
   
    console.log(data)

    const onDeletFavoriteClicked = async ( articleId) => {
        try {
          console.log("UI", UI, "AI",articleId)
          await deleteFavorite( {userId:UI, articleId:articleId} ).unwrap()
          refetch()
         
        } catch (err) {
          console.error('Failed to delete favorite: ', err)
        }
    }

    return(
        <>
        <h1>Favories</h1>
        {data.map((fave, key) => (
           <div key={fave.id}>
            <h2>{fave.title}</h2>
            <img width="200px"src={fave.image}/>
            <a href={fave.url}>Go to Story</a> 
            <button onClick={()=>onDeletFavoriteClicked(fave.id)}>Remove From Favorites</button>
           </div>
            
            ))}
        </>
    )

}

export default FavoritesPage;