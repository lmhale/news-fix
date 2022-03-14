import React from "react";
import { useAppDispatch, useAppSelector } from "../redux-app/hooks"
import { useGetTopHeadlinesQuery } from "../redux-app/features/news/news-api-slice";
import { SingleStory } from "./SingleStory";

export const NewsFeed = () => {
    const dispatch = useAppDispatch()
    const {data , isFetching} = useGetTopHeadlinesQuery();

    if(isFetching){
        return <h2>Loading ...</h2>
    }
 
    const articleData = data.articles ||[]
    return (
        <>
        <h1>News</h1>
   
        {articleData.map((value) => (
            <SingleStory
                title={value.title}
                description={value.description}
                source={value.source}
                image={value.urlToImage}
                url={value.url}
            />
            ))}
        </>
    )

} 