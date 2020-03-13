
import * as serviceWorker from './serviceWorker';
import store from './State/State';
import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import { BrowserRouter } from 'react-router-dom';
import './index.css';

 let rerenderEntireTree = (State) => {
ReactDOM.render(<BrowserRouter><App State={State} dispatch={store.dispatch.bind(store)}/></BrowserRouter>, document.getElementById('root'));
};

rerenderEntireTree(store.getState());

store.subscribe(rerenderEntireTree);
// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
