import React from 'react';
import Profile from './Profile';
import { connect } from 'react-redux';
import {getUserProfile} from '../../redux/profile-reducer';
import { withRouter, Redirect } from 'react-router-dom';
import { withAuthRedirect } from '../../hoc/withAuthRedirect';



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
  return <div>
   <Profile {...this.props} profile={this.props.profile}/>
  </div>
  } 
}

let AuthRedirectComponent = withAuthRedirect(ProfileContainer);

let mapStateToProps = (State) => ({
  profile: State.profilePage.profile,
});

let WithUrlDataContainerComponent = withRouter(AuthRedirectComponent);

export default connect(mapStateToProps, {getUserProfile}) (WithUrlDataContainerComponent);
