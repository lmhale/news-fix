import React from "react";

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
      "https://newsapi.org/v2/top-headlines?country=us&apiKey=22bbf90d967d4a6bb08645375335e232";
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
        stories.map((story) => <h1>{story.title}</h1>)
      )} 
    </div>
  );
}

export default LoadBackground;
