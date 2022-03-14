import ReactDom from "react-dom";
import App from "./components/App";
import { Provider } from "react-redux";
import { store } from "./redux-app/store";
ReactDom.render(
<Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById("root"));
