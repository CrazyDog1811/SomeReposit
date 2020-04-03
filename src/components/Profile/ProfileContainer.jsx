import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';



class ProfileContainer extends React.Component {

  componentDidMount() {
    let userId = this.props.match.params.userId;
    if(!userId) {
      userId = 6596;
    }
    this.props.getUserProfile(userId);
    // usersAPI.getProfile(userId).then(response => {
    //         this.props.setUserProfile(response.data);
    //     }) 
  }

  render() {
    if(!this.props.isAuth) return <Redirect to={"/login"} />;
  return <div>
   <Profile {...this.props} profile={this.props.profile}/>
  </div>
  } 
}

let mapStateToProps = (State) => ({
    profile: State.profilePage.profile,
    isAuth: State.auth.isAuth,
});

let WithUrlDataContainerComponent = withRouter(ProfileContainer);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
