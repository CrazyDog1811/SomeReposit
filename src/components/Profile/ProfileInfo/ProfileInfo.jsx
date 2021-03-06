import React from 'react';
import classes from './ProfileInfo.module.css';
import Preloader from '../../common/preloader/preloader';
import ProfileStatus from './ProfileStatus'

const ProfileInfo = (props) => {
    if(!props.profile) {
        return <Preloader />
      }
    return <div>
        <img src="https://www.bing.com/th?id=OIP.AGTOByuvPlmrByuwYXm72QHaDs&pid=Api&rs=1" alt="space" width="100%" height="100px"></img>
        <div className={classes.avatar}>
            <img src={props.profile.photos.large} alt="I am black" width="80" height="80"></img>
            {props.profile.fullName}
            <ProfileStatus status={props.status} updateStatus={props.updateStatus} />
        </div>
    </div>
}

export default ProfileInfo;