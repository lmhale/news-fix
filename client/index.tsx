import ReactDom from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { Provider } from "react-redux";
import { store } from "./store";
import {NavBar} from "./components/NavBar" 
import CssBaseline from '@mui/material/CssBaseline';
import {ThemeProvider, createTheme} from '@mui/material'
import {theme} from './theme'


ReactDom.render(
 
  <Provider store={store}> 
  <ThemeProvider theme={theme}>
  <BrowserRouter>
  <CssBaseline/>

  <App />
  </BrowserRouter>
   </ThemeProvider>
  </Provider>,

  document.getElementById("root")
);
