import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = process.env.API_KEY;

export interface Article {
   id:string,
  source: {
    name: string;
  },
author:string,
title: string,
description: string,
category: string,
url: string,
urlToImage: string,
publishedAt: Date,
}

//  interface News {
//   status:"ok",
//   totalResults:number,
//   articles: Article[] 
// }

export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/top-headlines', 
    prepareHeaders(headers){
                    headers.set('x-api-key',api_key)
                    return headers; 
                } 
            }),
    endpoints: (builder) => ({
      getTopHeadlines: builder.query<Article, string|void>({
        query: (category) => ({url:`?country=us&category=${category}`}),
        transformResponse:(data:{articles: Article}) => {
          return data.articles
        },
      }),
    }),
  })
  

export const {useGetTopHeadlinesQuery} = newsApi;
