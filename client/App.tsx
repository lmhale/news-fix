
import {
  BrowserRouter,
  Routes,
  Route,
  Navigate
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./features/Favorites/FavoritesPage";
import LandingPage from "./features/Login_Signup/LandingPage"
import { NavBar } from "./components/NavBar";
import Login from "./features/Login_Signup/Login";
import { useAuth } from "./utils/hooks";
import { Logout } from "./components/Logout";
import {NewsPage} from "./features/News/NewsPage"

const App = () => {
  
 let userId = localStorage.getItem("userId")
 console.log(userId)
  return (
<>
  <NavBar/>
<Routes>

 <Route  path="/" element={userId ? <NewsPage />:  <Navigate replace to ="/loginorsignup"/>} />  

 <Route path="favorites" element={<FavoritesPage/>} />
 {/* If you have a userId you can't see this route*/}
<Route  path="loginorsignup" element={ <LandingPage/>} /> 

<Route path="logout" element={<Logout/>}/>

</Routes>
</>

 

  );
};


export default App;
