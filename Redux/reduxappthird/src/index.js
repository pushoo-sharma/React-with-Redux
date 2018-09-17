import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer/reducer';

import { Provider } from 'react-redux';
import { createStore,applyMiddleware } from 'redux';
import thunk from "redux-thunk";
// const logAction = store => {
//     return next => {
//         return action =>{
//             const result = next(action);
//             console.log(`catch in the middleWare ${JSON.stringify(result)}`);
//             return result;
//         }
//     }
// }
const store = createStore(reducer,applyMiddleware(thunk));

// const store = createStore(reducer,applyMiddleware(logAction));

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
