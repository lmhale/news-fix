
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";
import { NavBar } from "./NavBar";
import Login from "./Login";
import NewsFeed  from "./NewsFeed";


const App = () => {
  return (
<>

<Routes>

<Route  path="/" element={<NewsFeed/>} />  
 <Route path="favorites" element={<FavoritesPage/>} />
<Route  path="Login" element={<Login/>} />  
</Routes>
</>

 

  );
};


export default App;
