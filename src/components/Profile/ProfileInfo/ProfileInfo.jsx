import React from 'react';
import classes from './ProfileInfo.module.css';


const ProfileInfo = (props) => {
    return <div>
        <img src="https://www.bing.com/th?id=OIP.AGTOByuvPlmrByuwYXm72QHaDs&pid=Api&rs=1" alt="space" width="100%" height="100px"></img>
        <div className={classes.avatar}>
            <img src="http://i.huffpost.com/gen/781019/images/o-DMX-COMPUTER-RAPPER-GOOGLE-VIDEO-facebook.jpg" alt="I am black" width="80" height="80"></img>
        </div>
    </div>
}

export default ProfileInfo;