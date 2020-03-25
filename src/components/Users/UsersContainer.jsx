import React from 'react';
import { connect } from 'react-redux';
import { followAC, unfollowAC, setUsersAC, setCurrentPageAC, setUsersTotalCountAC } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';

class UsersContainer extends React.Component {

    componentDidMount() {
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${this.props.currentPage}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
            this.props.setUsersTotalCount(response.data.totalCount);
        })
    };

    onPageChanged = (pageNumber) => {
        this.props.setCurrentPage(pageNumber);
        axios.get(`https://social-network.samuraijs.com/api/1.0/users?page=${pageNumber}&count=${this.props.pageSize}`).then(response => {
            this.props.setUsers(response.data.items);
        })
    };

    render() {
        return  <Users totalUserCount={this.props.totalUserCount} 
        pageSize = {this.props.pageSize} 
        currentPage = {this.props.currentPage}
        onPageChanged = {this.onPageChanged} 
        users = {this.props.users} 
        unfollow = {this.props.unfollow} 
        follow = {this.props.follow} />
};

    }

let mapStateToProps = (State) => {
    return {
        users: State.usersPage.users,
        pageSize: State.usersPage.pageSize,
        totalUserCount: State.usersPage.totalUserCount,
        currentPage: State.usersPage.currentPage
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
        }
    }
}
export default connect(mapStateToProps, mapDispatchToProps)(UsersContainer);


