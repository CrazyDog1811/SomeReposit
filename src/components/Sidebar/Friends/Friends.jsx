import React from 'react';
import classes from './Friends.module.css';

const Friends = (props) => {
    return (
        <div className={classes.friends}>
            <h3>My Friends</h3>
            <div className={classes.unit}>
            <span className={classes.friend}></span>
            <span className={classes.friend}></span>
            <span className={classes.friend}></span>
            </div>
        </div>
    )
};

export default Friends;