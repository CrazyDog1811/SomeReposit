import React from 'react';
import classes from './Dialogs.module.css';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';


const Dialogs = (props) => {
    let state = props.dialogsPage;
    let dialogsElements = state.dialogsData.map((dialog) => (<DialogItem key={dialog.id} name={dialog.name} id={dialog.id} />));
    let messagesElements = state.messagesData.map((message) => (<Message key={message.id} message={message.message} />));
   
    let newMessageElement = React.createRef();
    let addMessage = () => {      
        props.addMessage();
    };
    let onMessageChange = () => {
        let text = newMessageElement.current.value;
        props.updateNewMessageText(text);
       // let action = updateNewMessageTextActionCreator(text);
       // props.dispatch(action);
    };
        return (
        <div className={classes.dialogs}>
            <div className={classes.dialogsItems}>
                {dialogsElements}
            </div>
            <div className={classes.messages}>
                {messagesElements}
                <div className={classes.form}>
                <textarea onChange={onMessageChange} ref={newMessageElement} placeholder="enter Your post" value={props.newMessageText}></textarea>
                <button onClick={addMessage}>Add post</button>
                </div>
            </div>
        </div>
    )
};

export default Dialogs;