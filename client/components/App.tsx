
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";
import LandingPage from "./LandingPage";
import { NavBar } from "./NavBar";
import Login from "./Login";
import NewsFeed  from "./NewsFeed";
import { useAuth } from "../redux-app/hooks";
import { Logout } from "./Logout";

const App = () => {
  
 let userId = localStorage.getItem("userId")
 console.log(userId)
  return (
<>
<NavBar/>
<Routes>

 <Route  path="/" element={userId ? <NewsFeed />:  <Navigate replace to ="/loginorsignup"/>} />  

 <Route path="favorites" element={<FavoritesPage/>} />
 {/* If you have a userId you can't see this route*/}
<Route  path="loginorsignup" element={ <LandingPage/>} /> 

<Route path="logout" element={<Logout/>}/>

</Routes>
</>

 

  );
};


export default App;
