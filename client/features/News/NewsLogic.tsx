import { title } from "process"
import React, {FC} from "react"
import { idText } from "typescript"
import { useSaveFavoriteMutation } from "../Favorites/redux/favorites-api-slice"
import { useGetTopHeadlinesQuery, Article } from "./redux/news-api-slice"
import NewsList from './NewsList';

interface ArticleProps {
    articles:Article[]
}

const userId = localStorage.getItem("userId")


export const GetNewsData: FC<any> = ({category}):JSX.Element => {
const { data=[], isFetching } = useGetTopHeadlinesQuery(category);


return  (
    <>
    <NewsList data={data} />
    </>
)



}




// export const SaveFavoritesData= (props:ArticleProps) => {
//     const [disable, setDisable] = React.useState(false);
//     const [addNewFavorite, { isLoading }] = useSaveFavoriteMutation()
   
//    const addToFavorites = async(): Promise<void> => {
//         try {
//             await addNewFavorite({userId:userId,favorites:props.articles}).unwrap()
//         } catch (error) {
//             console.error('Failed to save the post: ', error)
//         }
//     }
//     return (
//         <NewsList favorites={addToFavorites}/>
//     )
// }



