import React from 'react';
import classes from './Dialogs.module.css';
import { NavLink } from 'react-router-dom';

const DialogItem = (props) => {
    let path = "/dialogs/" + props.id; 
    return(
        <div className={classes.dialog}>
        <NavLink to={path} activeClassName={classes.active}>{props.name}</NavLink>
        </div>  
    )
};

const Message = (props) => {
    return(
    <div className={classes.message}>{props.message}</div>
    )
};

const Dialogs = (props) => {
    return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                <DialogItem name="Jhonny" id="1" />
                <DialogItem name="Elisa" id="2" />
                <DialogItem name="Portos" id="3" />
                <DialogItem name="Eger22" id="4" />
                <DialogItem name="Lenochka" id="5" />
            </div>
            <div className={classes.messages}>
                <Message message="Hi,I wonna meet you" />
                <Message message="Hwo are you" />
                <Message message="My older brather stood a programmer" />
                <Message message="nothing understood" />
                <Message message="yo, men. Give me five" />
            </div>
        </div>
    )
};

export default Dialogs;