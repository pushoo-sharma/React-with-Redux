//Combine Multiple Reducer
import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
// combining the reducer
import reducer_1 from "./store/reducer1";
import reducer_2 from './store/reducer2';
import {createStore , combineReducers} from 'redux';
import {Provider} from 'react-redux';

const rootreducer = combineReducers({
    rA : reducer_1,
    rB : reducer_2
});
const store = createStore(rootreducer);

ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>    
, document.getElementById('root'));
registerServiceWorker();
