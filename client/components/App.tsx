import "../styles.css";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom";
import { Link } from "react-router-dom";
import FavoritesPage from "./FavoritesPage";

import NewsFeed  from "./NewsFeed";


const App = () => {
  return (


<Routes>
<Route  path="/" element={<NewsFeed/>} />  
 <Route path="favorites" element={<FavoritesPage/>} />
</Routes>


 

  );
};


export default App;
