import React, {useState} from "react";
import { useSaveFavoriteMutation } from "../redux-app/features/favorites/favorites-api-slice";



export const SingleStory = ({title, description, source, image, url}) => {

    const [addNewFavorite, { isLoading }] = useSaveFavoriteMutation()
    interface IFavoriteData {
    title: "string";
    description: "string";
    source: "string";
    image: "string";
    url: "string";
  }
//   const [favorite, setFavorite ] = useState<IFavoriteData | undefined> (props)

  const userId = 'aca80fa9-d7c6-41c6-85bc-05ffda6e5f9d'
  
    const onSaveFavoriteClicked = async () => {
          try {
            await addNewFavorite( {title, description, source, image, url, userId} ).unwrap()
           
          } catch (err) {
            console.error('Failed to save the post: ', err)
          }
      }
  return (
    <>
      <div>
        <h1>{title}</h1>
        <p>{description}</p>
        <p>{source.name}</p>
        <div>
          <img width="250px" src={image} />
        </div>
        <a href={url}>Read More...</a>
        <button onClick={()=>onSaveFavoriteClicked()} style={{ margin: "10px" }}>
          Save
        </button>
      </div>
    </>
  );

  }
