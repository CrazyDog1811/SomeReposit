import profileReducer from "./profile-reducer";
import dialogsReducer from "./dialogs-reducer";
import sidebarReducer from "./sidebar-reducer";

let store = {
    _State: {
        profilePage: {
            postsData: [

                { id: 1, post: "Hi, how are you?", likesCount: "12" },
                { id: 2, post: "Wow, who's there? ", likesCount: "22" },
                { id: 3, post: "Yo, man", likesCount: "123" },
                { id: 4, post: "What's a f....", likesCount: "152" },
                { id: 5, post: "?", likesCount: "2" }
            ],
            newPostText: "Yo-Ho-Ho"
        },
        dialogsPage: {
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
        },
        sidebarPage: {},
    },
    _callSubscriber() {
    },
    getState() {
        return this._State;
    },
    subscribe(observer) {
        this._callSubscriber = observer;
    },
    dispatch(action) {
        this._State.profilePage = profileReducer(this._State.profilePage, action);
        this._State.dialogsPage = dialogsReducer(this._State.dialogsPage, action);
        this._State.sidebar = sidebarReducer(this._State.sidebar, action);

        this._callSubscriber(this._State);
    }
};

export default store;
window.store = store;