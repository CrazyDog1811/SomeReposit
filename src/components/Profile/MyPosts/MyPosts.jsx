import React from 'react';
import classes from'./MyPosts.module.css';
import Post from './Post/Post';
const MyPosts = () => {
    return  (
    <div className={classes.myPosts}>
    <h3>My posts</h3>
    <form>
    <textarea className={classes.textArea} rows="2" placeholder="your news"></textarea>
    <button className={classes.button}>Add post</button>
    </form>
    <Post likesCount="12" message="Hi, how are you?"/>
   <Post likesCount="22" message="Wow, hwo's there? "/>
   <Post likesCount="123" message="Yo, man"/>
   <Post likesCount="152" message="What's a f...."/>
   <Post likesCount="2" message="????"/>
    </div>
    )
}

export default MyPosts;