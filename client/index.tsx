import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {NavBar} from "./components/NavBar" 
import CssBaseline from '@mui/material/CssBaseline';
ReactDom.render(
 
  <Provider store={store}> 
  <BrowserRouter>
  <CssBaseline/>

  <App />
  </BrowserRouter>
   
  </Provider>,

  document.getElementById("root")
);
