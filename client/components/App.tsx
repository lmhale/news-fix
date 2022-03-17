
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";
import { NavBar } from "./NavBar";
import Login from "./Login";
import NewsFeed  from "./NewsFeed";
import { useAuth } from "../redux-app/hooks";


const App = () => {
  
 let userId = localStorage.getItem("userId")
 
  return (
<>
<NavBar/>
<Routes>

 <Route  path="/" element={userId ? <NewsFeed />:  <Navigate replace to ="/login"/>} />  

 <Route path="favorites" element={<FavoritesPage/>} />
<Route  path="Login" element={<Login/>} />  
</Routes>
</>

 

  );
};


export default App;
