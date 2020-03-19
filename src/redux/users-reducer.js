const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
let initialState = {
    users: [
       
    ],

   
};
const usersReducer = (State = initialState, action) => {
    switch (action.type) {
        case FOLLOW:
            return {
                ...State,
              users: State.users.map( u => {
                  if(u.id === action.userId) {
                      return {...u, followed: true}
                  }
                return u;
                }  )
            }
        case UNFOLLOW:
            return {
                ...State,
              users: State.users.map( u => {
                  if(u.id === action.userId) {
                      return {...u, followed: false}
                  }
                return u;
                }  )
            }
            case SET_USERS:
                return {
                    ...State,
                    users: action.users
                }
        default:
            return State;
    }
};

export const followAC = (userId) => ({ type: FOLLOW, userId });
export const unfollowAC = (userId) => ({type: UNFOLLOW, userId});
export const setUsersAC = (users) => ({type: SET_USERS, users});
export default usersReducer;