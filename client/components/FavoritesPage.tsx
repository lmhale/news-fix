import React from "react"
import {useGetFavoritesQuery, useDeleteFavoriteMutation } from "../redux-app/features/favorites/favorites-api-slice";

const FavoritesPage = () => {
    const userId = 'ec4c702e-db78-48ca-ae5d-4159c5b5f5d6'

    const {data=[], isFetching, refetch } = useGetFavoritesQuery(userId)
    
    const [deleteFavorite] = useDeleteFavoriteMutation()
   
    console.log(data)

    const onDeletFavoriteClicked = async (userId, articleId) => {
        try {
          
          await deleteFavorite({userId, articleId} ).unwrap()
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
            <button onClick={()=>onDeletFavoriteClicked(userId,fave.id)}>Remove From Favorites</button>
           </div>
            
            ))}
        </>
    )

}

export default FavoritesPage;