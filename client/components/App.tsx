import "../styles.css";
import FavoritesPage from "./FavoritesPage";

import { NewsFeed } from "./NewsFeed";
const App = () => {
  return (
    <>
      <h1>News Fix</h1>
      <NewsFeed/>
      <FavoritesPage/>
    </>
  );
};

export default App;
