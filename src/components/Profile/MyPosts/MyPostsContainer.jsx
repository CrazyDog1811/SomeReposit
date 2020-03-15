import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import StoreContext from '../../../StoreContext';

const MyPostsContainer = (props) => {

    return (
        <StoreContext.Consumer>
             {
            (store) => {
                let state = store.getState().profilePage;
                let addPost = () => {
                    store.dispatch(addPostActionCreator());
                };
                let onPostChange = (text) => {
                    let acttion = updateNewPostTextActionCreator(text);
                    store.dispatch(acttion);
                };
                return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.postsData}
                    newPostText={state.newPostText} />)
            }
        }
        </StoreContext.Consumer>
    );
};

export default MyPostsContainer;