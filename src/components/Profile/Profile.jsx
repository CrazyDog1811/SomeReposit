import React from 'react';
import classes from './Profile.module.css';
import MyPosts from './MyPosts/MyPosts.jsx';
import ProfileInfo from './ProfileInfo/ProfileInfo';

const Profile = (props) => {
  
  return <div>
    <ProfileInfo />
    <MyPosts postsData={props.profilePage.postsData} dispatch={props.dispatch} newPostText={props.profilePage.newPostText} />
  </div>
}

export default Profile;