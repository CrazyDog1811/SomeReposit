import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';

const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (<Post key={post.id} likesCount={post.likesCount} message={post.post} />));
    let newPostElement = React.createRef();
    let onAddPost = () => {
        props.addPost();
    };
    let onPostChange = () => {
        let text = newPostElement.current.value;
        props.updateNewPostText(text);
    };
    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <div className={classes.form}>
                <textarea onChange={onPostChange} ref={newPostElement} className={classes.textArea} rows="2" placeholder="you new post" value={props.newPostText} />
                <button onClick={onAddPost} className={classes.button}>Add post</button>
            </div>
            {postsElements}
        </div>
    )
}

export default MyPosts;