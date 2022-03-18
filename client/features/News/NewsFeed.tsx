import React from "react";
import { useAppDispatch, useAppSelector } from "../../utils/hooks";
import { useGetTopHeadlinesQuery } from "./redux/news-api-slice";
import { SingleStory } from "../../components/SingleStory";


const NewsFeed = ({cat}) => {
  const dispatch = useAppDispatch();
  const { data, isFetching } = useGetTopHeadlinesQuery(cat);

  if (isFetching) {
    return <h2>Loading ...</h2>;
  }

  const articleData = data.articles || [];
  return (
    <>
    
           {articleData.map((value) => (
        <SingleStory
          key={value.title.concat(value.publishedAt)}
          id={value.title + value.publishedAt}
          title={value.title}
          description={value.description}
          source={value.source.name}
          image={value.urlToImage}
          url={value.url}
          publishedAt={value.publishedAt}
        />
      ))} 
   
    </>
  );
};
export default NewsFeed;
