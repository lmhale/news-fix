import React from "react";

const api_key = process.env.API_KEY
interface IArticleData {
  author: string;
  title: string;
  description:string
}
function LoadBackground() {
  const [isLoading, setIsLoading] = React.useState(true);
  const [stories, setStories] = React.useState<IArticleData | undefined>(undefined);

  React.useEffect(() => {
    const url =
      `https://newsapi.org/v2/top-headlines?country=us&apiKey=${api_key}`;
    const fetchData = async () => {
      const response = await fetch(url);
       let d = await response.json();
      setStories(d.articles)
    };
    fetchData();
  }, []);

  React.useEffect(() => {
    if (stories) {
      setIsLoading(false);
    }
    console.log(stories);
  }, [stories]);

  return (
    <div>
    
      {isLoading ? (
        <h1>Loading...</h1>
      ) : (
        
        stories.map((story, k) => 
        <ul>
          <li>Title: {story.title}</li>
          <li>Description:{story.description}</li>
          <li>Author: {story.author}</li>
          </ul>
        ) 
       
      )} 
    </div>
  );
}

export default LoadBackground;
