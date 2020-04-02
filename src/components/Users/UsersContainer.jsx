import React from 'react';
import { connect } from 'react-redux';
import { follow, unfollow,  setCurrentPage, toggleFollowingProgress, getUsers } from '../../redux/users-reducer';
import * as axios from 'axios';
import Users from './Users';
import Preloader from '../common/preloader/preloader';
import { usersAPI } from '../../api/api';

class UsersContainer extends React.Component {

    componentDidMount() {
        this.props.getUsers(this.props.currentPage, this.props.pageSize);
        /* this.props.toggleIsFetching(true);

        usersAPI.getUsers(this.props.currentPage, this.props.pageSize)
        .then(data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
            this.props.setUsersTotalCount(data.totalCount);
        }) */
    };

    onPageChanged = (pageNumber) => {
        this.props.getUsers(pageNumber, this.props.pageSize);
       /* this.props.setCurrentPage(pageNumber);
        this.props.toggleIsFetching(true);
        usersAPI.getUsers(pageNumber, this.props.pageSize)
        .then( data => {
            this.props.toggleIsFetching(false);
            this.props.setUsers(data.items);
        }) */
    };

    render() {
        return <>
            {this.props.isFetching ? <Preloader /> : null}
            <Users totalUserCount={this.props.totalUserCount}
                pageSize={this.props.pageSize}
                currentPage={this.props.currentPage}
                onPageChanged={this.onPageChanged}
                users={this.props.users}
                unfollow={this.props.unfollow}
                follow={this.props.follow}
                followingInProgress={this.props.followingInProgress}
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
        isFetching: State.usersPage.isFetching,
        followingInProgress: State.usersPage.followingInProgress,
    }
};

export default connect(mapStateToProps,{ follow, unfollow, setCurrentPage, toggleFollowingProgress, getUsers })(UsersContainer);


