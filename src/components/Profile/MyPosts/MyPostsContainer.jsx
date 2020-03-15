import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';

const MyPostsContainer = (props) => {
    let state = props.store.getState();
    let addPost = () => {
        props.store.dispatch(addPostActionCreator());
    };
    let onPostChange = (text) => {
        let acttion = updateNewPostTextActionCreator(text);
        props.store.dispatch(acttion);
    };
    return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.profilePage.postsData}
         newPostText={state.profilePage.newPostText}/>);
};

export default MyPostsContainer;