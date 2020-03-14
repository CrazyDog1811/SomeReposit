const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';

const dialogsReducer = (State, action) => {
    switch (action.type) {
        case ADD_MESSAGE:
            let newMessage = {
                id: 6,
                message: State.newMessageText
            };
            State.messagesData.push(newMessage);
            State.newMessageText = "";
            return State;
        case UPDATE_NEW_MESSAGE_TEXT:
            State.newMessageText = action.newText;
            return State;
        default:
            return State;
    }
};

export const addMessageActionCreator = () =>({type: ADD_MESSAGE});
export const updateNewMessageTextActionCreator = (text) => ({
        type: UPDATE_NEW_MESSAGE_TEXT,
        newText: text
    });
export default dialogsReducer;