const ADD_MESSAGE = 'ADD-MESSAGE';
const UPDATE_NEW_MESSAGE_TEXT = 'UPDATE-NEW-MESSAGE-TEXT';
let initialState =  {
    dialogsData: [
        { id: 1, name: "Jhonny" },
        { id: 2, name: "Elisa" },
        { id: 3, name: "Portos" },
        { id: 4, name: "Eger22" },
        { id: 5, name: "Lenochka" }
    ],

    messagesData: [
        { id: 1, message: "Hi,I wonna meet you" },
        { id: 2, message: "Hwo are you" },
        { id: 3, message: "My older brather stood a programmer" },
        { id: 4, message: "nothing understand" },
        { id: 5, message: "yo, men. Give me five" }
    ],
    newMessageText: "Write your message here"
};
const dialogsReducer = (State = initialState, action) => {
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