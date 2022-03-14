import React from "react";
import { useAppDispatch, useAppSelector } from "../redux-app/hooks"
import { useGetTopHeadlinesQuery } from "../redux-app/features/news/news-api-slice";
import News from "../redux-app/features/news/news-api-slice";
import { Article } from "../../server/entity/Article";

export const NewsFeed = () => {
    const dispatch = useAppDispatch()
    const {data={} , isFetching} = useGetTopHeadlinesQuery();
    
    if(isFetching){
        return <h2>Loading ...</h2>
    }
    const articleData = data.articles ||[]
    return (
        <>
        <h1>News</h1>
   
        {articleData.map((value) => (
            <div>
            <h1>{value.title}</h1>
            <p>{value.description}</p>
            <p>{value.source.name}</p>
            <div>
            <img width="250px" src={value.urlToImage}/>
            </div>
            <a href={value.url}>Read More...</a>
            </div>
            ))}
        </>
    )

} 