import ReactDom from "react-dom";
import App from "./components/App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./redux-app/store";
ReactDom.render(
 
  <Provider store={store}> 
  <BrowserRouter>
  <App />
  </BrowserRouter>
   
  </Provider>,

  document.getElementById("root")
);
