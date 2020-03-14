const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';

const profileReducer = (State, action) => {

    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: State.newPostText,
                likesCount: 0
            };
            State.postsData.push(newPost);
            State.newPostText = "";
            return State;
        case UPDATE_NEW_POST_TEXT:
            State.newPostText = action.newText;
            return State;
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