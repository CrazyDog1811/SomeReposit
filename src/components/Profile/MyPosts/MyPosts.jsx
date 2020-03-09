import React from 'react';
import classes from './MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = (props) => {
    let postsElements = props.postsData.map((post) => (<Post likesCount={post.likesCount} message={post.post} />));

    return (
        <div className={classes.myPosts}>
            <h3>My posts</h3>
            <form>
                <textarea className={classes.textArea} rows="2" placeholder="your news"></textarea>
                <button className={classes.button}>Add post</button>
            </form>
            {postsElements}
        </div>
    )
}

export default MyPosts;