import React from 'react';
import classes from './DialogForm.module.css';

const DialogForm = (props) => {
    let newMessageElement = React.createRef();
    let addMessage = () => {      
        props.addMessage();
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
    };
        return (
                <div className={classes.form}>
                <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="enter Your post" value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Add post</button>
                </div>
    )
};

export default DialogForm;