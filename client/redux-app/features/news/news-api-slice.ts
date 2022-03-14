import { createApi, fetchBaseQuery } from "@reduxjs/toolkit/query/react";

const api_key = process.env.API_KEY;

 interface Article {
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

 interface News {
  status:"ok",
  totalResults:number,
  articles: Article[] 
}

export const newsApi = createApi({
    reducerPath: 'news',
    baseQuery: fetchBaseQuery({ baseUrl: 'https://newsapi.org/v2/', 
    prepareHeaders(headers){
                    headers.set('x-api-key',api_key)
                    return headers; 
                } 
            }),
    endpoints: (builder) => ({
      getTopHeadlines: builder.query<News[], string|void>({
        query: (country = 'us') => `top-headlines?country=${country}`,
      }),
    }),
  })
  

export const {useGetTopHeadlinesQuery} = newsApi;