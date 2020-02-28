import React from 'react';
import classes from'./MyPosts.module.css';
const MyPosts = () => {
    return  (
    <div className={classes.myPosts}>
    <h3>My posts</h3>
    <textarea className={classes.textArea} rows="2" placeholder="your news"></textarea>
    <button className={classes.button}></button>
    </div>
    )
}

export default MyPosts;