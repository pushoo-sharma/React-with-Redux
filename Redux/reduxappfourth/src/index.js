import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reducer from './store/reducer';
import {watchAgeUp} from "./saga/saga";
import { Provider } from 'react-redux';
import { createStore , applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();



const store = createStore(reducer, applyMiddleware(sagaMiddleware));
//u have mount it before u run it
sagaMiddleware.run(watchAgeUp);

ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));
