import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (<Post likesCount={post.likesCount} message={post.post} />));
    let newPostElement = React.createRef();
    let addPost = () => { 
        props.dispatch({type: 'ADD-POST'});
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        let action = {type: 'UPDATE-NEW-POST-TEXT', newText: text};
        props.dispatch(action);
    };
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.form}>
                <textarea onChange={onPostChange} ref={newPostElement} className={classes.textArea} rows="2" placeholder="you new post" value={props.newPostText}/>
                <button onClick={addPost} className={classes.button}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;