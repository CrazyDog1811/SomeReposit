import { authAPI } from "../api/api";

const SET_USER_DATA = 'SET_USER_DATA';

let initialState = {
    userId: null,
    email: null,
    login: null,
    isAuth: false,
}
const authReducer = (State = initialState, action) => {
    switch (action.type) {
        case SET_USER_DATA:
            return {
                ...State,
                ...action.data,
                isAuth: true,
            };
       
        default:
            return State;
    }
};

export const setAuthUserData = (userId, email, login) => ({ type: SET_USER_DATA, data: {userId, email, login} });
export const getAuthUserData = () => (dispatch) => {
    authAPI.me().then(response => {
        if(response.data.resultCode === 0) {
          let {id, email, login} = response.data.data;
          dispatch(setAuthUserData(id, email, login));
        }
     })
}
export default authReducer;