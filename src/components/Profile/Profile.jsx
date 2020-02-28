import React from 'react';
import classes from'./Profile.module.css';
import MyPosts from'./MyPosts/MyPosts.jsx';
import Post from './MyPosts/Post/Post';
const Profile = () => {
    return   <main className={classes.profile}>
    <img src="https://www.bing.com/th?id=OIP.AGTOByuvPlmrByuwYXm72QHaDs&pid=Api&rs=1" alt="space" width="100%" height="100px"></img>
    <div className={classes.avatar}>
      <img src="http://i.huffpost.com/gen/781019/images/o-DMX-COMPUTER-RAPPER-GOOGLE-VIDEO-facebook.jpg" alt="I am black" width="80" height="80"></img>
    </div>
   <MyPosts />
   <Post />
   <Post />
   <Post />
   <Post />
   <Post />
  </main>
}

export default Profile;