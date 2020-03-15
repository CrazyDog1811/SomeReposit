import React from 'react';
import classes from './DialogForm.module.css';
import { addMessageActionCreator, updateNewMessageTextActionCreator } from '../../../redux/dialogs-reducer';

const DialogForm = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {      
        props.dispatch(addMessageActionCreator());
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        let action = updateNewMessageTextActionCreator(text);
        props.dispatch(action);
    };
        return (
                <div className={classes.form}>
                <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="enter Your post" value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Add post</button>
                </div>
    )
};

export default DialogForm;