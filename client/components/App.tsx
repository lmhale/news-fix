import "../styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";
import { NavBar } from "./NavBar";

import NewsFeed  from "./NewsFeed";


const App = () => {
  return (
<>
<NavBar/>
<Routes>

<Route  path="/" element={<NewsFeed/>} />  
 <Route path="favorites" element={<FavoritesPage/>} />
</Routes>
</>

 

  );
};


export default App;
