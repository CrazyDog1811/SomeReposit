import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC, toggleIsFetchingAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import preloader from '../../assets/images/ball.svg';
import Preloader from '../common/preloader/preloader';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(response.data.items);
        })
    };

    render() {
        return <>
        {this.props.isFetching ? <Preloader />: null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                
            />
        </>
    };

}

let mapStateToProps = (State) => {
    return {
        users: State.usersPage.users,
        pageSize: State.usersPage.pageSize,
        totalUserCount: State.usersPage.totalUserCount,
        currentPage: State.usersPage.currentPage,
        isFetching: State.usersPage.isFetching
    }
};
let mapDispatchToProps = (dispatch) => {
    return {
        follow: (userId) => {
            dispatch(followAC(userId))
        },
        unfollow: (userId) => {
            dispatch(unfollowAC(userId))
        },
        setUsers: (users) => {
            dispatch(setUsersAC(users))
        },
        setCurrentPage: (pageNumber) => {
            dispatch(setCurrentPageAC(pageNumber))
        },
        setUsersTotalCount: (totalCount) => {
            dispatch(setUsersTotalCountAC(totalCount))
        },
        toggleIsFetching: (isFetching) => {
            dispatch( toggleIsFetchingAC(isFetching))
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


