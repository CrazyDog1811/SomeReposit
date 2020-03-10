import React from 'react';
import classes from './DialogItem.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id;
    return (
        <div className={classes.dialog}>
            <img src="https://ava-24.com/_ph/118/2/516814896.jpg?1583826031" alt="my face" width="50px"/>
            <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>
    )
};

export default DialogItem;