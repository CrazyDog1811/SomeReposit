const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
let initialState =  {
    postsData: [

        { id: 1, post: "Hi, how are you?", likesCount: "12" },
        { id: 2, post: "Wow, hwo's there? ", likesCount: "22" },
        { id: 3, post: "Yo, man", likesCount: "123" },
        { id: 4, post: "What's a f....", likesCount: "152" },
        { id: 5, post: "????", likesCount: "2" }
    ],
    newPostText: "Yo-Ho-Ho"
};
const profileReducer = (State = initialState, action) => {
    switch (action.type) {
        case ADD_POST: {
            let newPost = {
                id: 6,
                post: State.newPostText,
                likesCount: 0
            };
            let stateCopy = {...State};
            stateCopy.postsData = [...State.postsData];
            stateCopy.postsData.push(newPost);
            stateCopy.newPostText = "";
            return stateCopy;
        }
        case UPDATE_NEW_POST_TEXT: {
            let stateCopy = {...State};
            stateCopy.newPostText = action.newText;
            return stateCopy;
        }
        default:
            return State;
    }
};

export const addPostActionCreator = () =>({type: ADD_POST});
export const updateNewPostTextActionCreator = (text) => ({
        type: UPDATE_NEW_POST_TEXT,
        newText: text
    });
export default profileReducer;