import React from 'react';
import { addPostActionCreator, updateNewPostTextActionCreator } from '../../../redux/profile-reducer';
import MyPosts from './MyPosts';
import { connect } from 'react-redux';

// const MyPostsContainer = (props) => {

//     return (
//         <StoreContext.Consumer>
//              {
//             (store) => {
//                 let state = store.getState().profilePage;
//                 let addPost = () => {
//                     store.dispatch(addPostActionCreator());
//                 };
//                 let onPostChange = (text) => {
//                     let acttion = updateNewPostTextActionCreator(text);
//                     store.dispatch(acttion);
//                 };
//                 return (<MyPosts updateNewPostText={onPostChange} addPost={addPost} postsData={state.postsData}
//                     newPostText={state.newPostText} />)
//             }
//         }
//         </StoreContext.Consumer>
//     );
// };
let mapStateToProps = (state) => {
    return {
        newPostText: state.profilePage.newPostText,
        postsData: state.profilePage.postsData
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        updateNewPostText: (text) => {
            dispatch(updateNewPostTextActionCreator(text));
        }, 
        addPost: () => {
            dispatch(addPostActionCreator());
        }
    }
};
const MyPostsContainer = connect(mapStateToProps, mapDispatchToProps)(MyPosts);

export default MyPostsContainer;
