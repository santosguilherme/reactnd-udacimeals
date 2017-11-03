import React from 'react';
import ReactDOM from 'react-dom';

import {createStore} from 'redux';

import App from './components/App';
import registerServiceWorker from './registerServiceWorker';
import reducers from './reducers';

import './index.css';


const store = createStore(
    reducers,
    window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__()
);

ReactDOM.render(
    <App store={store}/>,
    document.getElementById('root')
);
registerServiceWorker();
