import ReactDom from 'react-dom';
import App from './components/App';
import Store from '../src/context/dataStore'
ReactDom.render(
    <Store>
    <App />
    </Store>,
 document.getElementById('root')
);
