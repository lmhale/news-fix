import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

export const favoritesApi = createApi({
    reducerPath: 'favorites',
    baseQuery: fetchBaseQuery({ baseUrl: 'http://localhost:3000/' }),
    
    endpoints: builder => ({
      getFavorites: builder.query({
        query: (userId) => `${userId}/favorites`
        
      }),
      saveFavorite: builder.mutation({
        query:({ userId, ...initialFavorite }) => ({
          url: `${userId}/favorites`,
          method: 'POST',
          // Include the entire post object as the body of the request
          body: initialFavorite
        })
        
      }),
      deleteFavorite: builder.mutation({
        query:({userId, articleId}) => ({
          url: `${userId}/favorites/${articleId}`,
          method:'DELETE'
        })
      })
    })
  })
  
  export const {
    useGetFavoritesQuery,
    useSaveFavoriteMutation,
    useDeleteFavoriteMutation
  } = favoritesApi