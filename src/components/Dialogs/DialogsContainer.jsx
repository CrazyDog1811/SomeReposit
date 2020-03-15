import React from 'react';
import DialogItem from './DialogItem/DialogItem';
import Message from './Message/Message';
import { updateNewMessageTextActionCreator, addMessageActionCreator } from '../../redux/dialogs-reducer';
import Dialogs from './Dialogs';
import StoreContext from '../../StoreContext';


const DialogsContainer = () => {
   
        return (<StoreContext.Consumer> 
            {
            (store) => {
                let state = store.getState().dialogsPage;
    
                let addMessage = () => {      
                    store.dispatch(addMessageActionCreator());
                };
                let onMessageChange = (text) => {
                    let action = updateNewMessageTextActionCreator(text);
                    store.dispatch(action);
                };
    return <Dialogs updateNewMessageText={onMessageChange} addMessage={addMessage} dialogsPage={state} newMessageText={state.newMessageText}/>
        }
    }
     </StoreContext.Consumer>
    )
};

export default DialogsContainer;