import React from 'react';
import classes from './Profile.module.css';
import ProfileInfo from './ProfileInfo/ProfileInfo';
import MyPostsContainer from './MyPosts/MyPostsContainer';
import Preloader from '../common/preloader/preloader';

const Profile = (props) => {
 
  return <div>
    <ProfileInfo profile={props.profile}/>
    <MyPostsContainer />
  </div>
}

export default Profile;