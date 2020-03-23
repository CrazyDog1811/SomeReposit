import React from 'react';
import classes from './Users.module.css';
import * as axios from 'axios';
import userPhoto from '../../assets/images/userInc.jpeg';

class Users extends React.Component {

    constructor(props) {
        super(props);
        axios.get('https://social-network.samuraijs.com/api/1.0/users').then(response => {
            this.props.setUsers(response.data.items);
        })
    }

    render() {
        return <div>
        {
        this.props.users.map(u => <div key={u.id} className={classes.users}>
            <div className={classes.avatar}>
                <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="big-ben" width="70" height="70" />
              {u.followed ? 
              <button onClick={() => {this.props.unfollow(u.id)}}>UNFOLLOW</button> :
               <button onClick={() => {this.props.follow(u.id)}}>FOLLOW</button>}  
            </div>
            <div className={classes.description}>
                <div className={classes.left}>
                    {u.name}
                    <br/>
                    {u.status}
                </div>
                <div className={classes.right}>
                {'u.location.country'}
                    <br/>
                    {'u.location.city'}
                </div>
            </div>
        </div>)}
    </div>
};

    }


export default Users;
