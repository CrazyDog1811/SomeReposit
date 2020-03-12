import { rerenderEntireTree } from "../Render";

let State = {
    profilePage: {
        postsData: [

            { id: 1, post: "Hi, how are you?", likesCount: "12" },
            { id: 2, post: "Wow, hwo's there? ", likesCount: "22" },
            { id: 3, post: "Yo, man", likesCount: "123" },
            { id: 4, post: "What's a f....", likesCount: "152" },
            { id: 5, post: "????", likesCount: "2" }
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
        ]
    },
    sidebar: {},
};
window.State = State;
export let addPost = () => {
    let newPost = {
        id: 6,
        post: State.profilePage.newPostText,
        likesCount: 0
    };
    State.profilePage.postsData.push(newPost);
    State.profilePage.newPostText = "";
    rerenderEntireTree(State);
};
export let updateNewPostText = (newText) => {
State.profilePage.newPostText = newText;
rerenderEntireTree(State);
};

export default State;