import React from "react"
import {useGetFavoritesQuery } from "../redux-app/features/favorites/favorites-api-slice";

const FavoritesPage = () => {
    const userId = 'ec4c702e-db78-48ca-ae5d-4159c5b5f5d6'

    const {data=[], isFetching} = useGetFavoritesQuery(userId)
    console.log(data)
    return(
        <>
        <h1>Favories</h1>
        {data.map((fave) => (
           <div>
            <h2>{fave.title}</h2>
            <img width="200px"src={fave.image}/>
            <a href={fave.url}>Go to Story</a> 
            <button>Remove From Favorites</button>
           </div>
            
            ))}
        </>
    )

}

export default FavoritesPage;