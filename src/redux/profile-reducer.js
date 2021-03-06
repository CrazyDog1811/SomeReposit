import { usersAPI, profileAPI } from "../api/api";

const ADD_POST = 'ADD-POST';
const UPDATE_NEW_POST_TEXT = 'UPDATE-NEW-POST-TEXT';
const SET_USER_PROFILE = 'SET_USER_PROFILE';
const SET_STATUS = 'SET_STATUS';

let initialState = {
    postsData: [

        { id: 1, post: "Hi, how are you?", likesCount: "12" },
        { id: 2, post: "Wow, who's there? ", likesCount: "22" },
        { id: 3, post: "Yo, man", likesCount: "123" },
        { id: 4, post: "What's a f....", likesCount: "152" },
        { id: 5, post: "????", likesCount: "2" }
    ],
    newPostText: "Yo-Ho-Ho",
    profile: null,
    status: "",
};
const profileReducer = (State = initialState, action) => {
    switch (action.type) {
        case ADD_POST:
            let newPost = {
                id: 6,
                post: State.newPostText,
                likesCount: 0
            };
            return {
                ...State,
                newPostText: "",
                postsData: [...State.postsData, newPost]
            };
        case UPDATE_NEW_POST_TEXT:
            return {
                ...State,
                newPostText: action.newText
            };
        case SET_USER_PROFILE:
            return {
                ...State,
                profile: action.profile
            };
            case SET_STATUS:
                return {
                    ...State,
                    status: action.status
                }
        default:
            return State;
    }
};

export const addPostActionCreator = () => ({ type: ADD_POST });
export const updateNewPostTextActionCreator = (text) => ({
    type: UPDATE_NEW_POST_TEXT,
    newText: text
});
export const setUserProfile = (profile) => ({ type: SET_USER_PROFILE, profile });
export const setStatus = (status) => ({ type: SET_STATUS, status });
export const getUserProfile = (userId) => (dispatch) => {
    usersAPI.getProfile(userId).then(response => {
        dispatch(setUserProfile(response.data));
    })
}
export const getStatus = (userId) => (dispatch) => {
    profileAPI.getStatus(userId).then(response => {
        dispatch(setStatus(response.data));
    })
}
export const updateStatus = (status) => (dispatch) => {
    profileAPI.updateStatus(status)
    .then(response => {
        if(response.data.resultCode === 0) {
        dispatch(setStatus(status));
        }
    })
}
export default profileReducer;
