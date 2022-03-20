import { SaveFavoritesData } from "./NewsLogic"
import NewsTabs from "../../components/NewsTabs"
import { Container } from "@mui/material"
import{useAuth} from '../../utils/hooks'



export const NewsPage  = () => {

    return (
        <Container
        sx={{
          // flexGrow: 1,
          flexDirection:'row',
          bgcolor: "background.paper",
          display: "flex",
          marginTop:"20px",
        
        }}
      >
        <NewsTabs/>
     
       </Container>
     
        
    )
}