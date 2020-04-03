import { usersAPI } from '../api/api';

const FOLLOW = 'FOLLOW';
const UNFOLLOW = 'UNFOLLOW';
const SET_USERS = 'SET_USERS';
const SET_CURRENT_PAGE = 'SET_CURRENT_PAGE';
const SET_TOTAL_USERS_COUNT = 'SET_TOTAL_USERS_COUNT';
const TOGGLE_IS_FETCHING = 'TOGGLE_IS_FETCHING';
const TOGGLE_IS_FOLLOWING_PROGRESS = 'TOGGLE_IS_FOLLOWING_PROGRESS';

let initialState = {
    users: [ ],
    pageSize: 5,
    totalUserCount: 0,
    currentPage: 1,
    isFetching: false,
    followingInProgress: [],
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
                case SET_CURRENT_PAGE:
                    return {
                        ...State,
                        currentPage: action.currentPage
                    }
                case SET_TOTAL_USERS_COUNT:
                    return {
                        ...State,
                        totalUserCount: action.count
                    }
                    case TOGGLE_IS_FETCHING:
                        return {
                            ...State,
                            isFetching: action.isFetching
                        }
                        case TOGGLE_IS_FOLLOWING_PROGRESS:
                            return {
                                ...State,
                                followingInProgress: action.isFetching 
                                ? [...State.followingInProgress, action.userId]
                                : State.followingInProgress.filter(id => id !== action.userId),
                            }
        default:
            return State;
    }
};

export const followSuccess = (userId) => ({ type: FOLLOW, userId });
export const unfollowSuccess = (userId) => ({type: UNFOLLOW, userId});
export const setUsers = (users) => ({type: SET_USERS, users});
export const setCurrentPage = (currentPage) => ({type: SET_CURRENT_PAGE, currentPage});
export const setUsersTotalCount = (totalUsersCount) => ({type: SET_TOTAL_USERS_COUNT, count: totalUsersCount});
export const toggleIsFetching = (isFetching) => ({ type: TOGGLE_IS_FETCHING, isFetching });
export const toggleFollowingProgress = (isFetching, userId) => ({ type: TOGGLE_IS_FOLLOWING_PROGRESS, isFetching, userId });

export const getUsers = (currentPage, pageSize) => {
    return (dispatch) => {
    dispatch(toggleIsFetching(true));

    usersAPI.getUsers(currentPage, pageSize).then(data => {
        dispatch(toggleIsFetching(false));
        dispatch(setUsers(data.items));
        dispatch(setUsersTotalCount(data.totalCount));
    })
}
}
export const follow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.follow(userId).then(response => {
             if(response.data.resultCode === 0) {
                 dispatch(followSuccess(userId))
             }
             dispatch(toggleFollowingProgress(false, userId));
         })   
}
}
export const unfollow = (userId) => {
    return (dispatch) => {
        dispatch(toggleFollowingProgress(true, userId));
        usersAPI.unfollow(userId).then(response => {
             if(response.data.resultCode == 0) {
                 dispatch(unfollowSuccess(userId))
             }
             dispatch(toggleFollowingProgress(false, userId));
         })   
}
}

export default usersReducer;
