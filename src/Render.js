import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {addPost, updateNewPostText, updateNewMessageText, addMessage} from './State/State';
import { BrowserRouter } from 'react-router-dom';

export let rerenderEntireTree = (State) => {
ReactDOM.render(<BrowserRouter><App State={State} addPost={addPost} addMessage={addMessage} updateNewPostText={updateNewPostText} updateNewMessageText={updateNewMessageText}/></BrowserRouter>, document.getElementById('root'));
};

