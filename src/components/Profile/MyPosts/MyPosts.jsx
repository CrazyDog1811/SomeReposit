import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (<Post likesCount={post.likesCount} message={post.post} />));
    let newPostElement = React.createRef();
    let addPost = () => { 
        debugger;
        let text = newPostElement.current.value;
        props.addPost(text)};

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <form>
                <textarea ref={newPostElement} className={classes.textArea} rows="2" placeholder="your news"></textarea>
                <button onClick={ addPost } className={classes.button}>Add post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default MyPosts;