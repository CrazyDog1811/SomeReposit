import React from 'react';
import classes from './Users.module.css';
import userPhoto from '../../assets/images/userInc.jpeg';
import { NavLink } from 'react-router-dom';
import * as axios from 'axios';
//import { followAPI } from '../../api/api';

let Users = (props) => {
    let pagesCount = Math.ceil(props.totalUserCount / props.pageSize);
    let pages = [];
    for(let i = 1; i <= pagesCount; i++) {
        pages.push(i);
    }



    return <div>
        {
            props.users.map(u => <div key={u.id} className={classes.users}>
                <div className={classes.avatar}>
                   <NavLink to={'/profile/' + u.id}>
                    <img src={u.photos.small !== null ? u.photos.small : userPhoto} alt="big-ben" width="70" height="70" />
                    </NavLink>
                    {u.followed ?
                        <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => {
                            props.toggleFollowingProgress(true, u.id);
                            axios.delete(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {
                                withCredentials: true,
                                headers: {
                                    "API-KEY": "bfec528d-df0b-4f80-9e1e-afa4fb5f8eed"
                                },
                              })
                              .then(response => {
                                  if(response.data.resultCode == 0) {
                                      props.unfollow(u.id)
                                  }
                                  props.toggleFollowingProgress(false, u.id);
                              })
                        }}>UNFOLLOW</button> 
                        : <button disabled={props.followingInProgress.some(id => id === u.id)} onClick={() => { 
                            props.toggleFollowingProgress(true, u.id);
                             axios.post(`https://social-network.samuraijs.com/api/1.0/follow/${u.id}`, {}, {
                               withCredentials: true,
                               headers: {
                                 "API-KEY": "bfec528d-df0b-4f80-9e1e-afa4fb5f8eed"
                             },
                             })
                             .then(response => {
                                 if(response.data.resultCode == 0) {
                                     props.follow(u.id)
                                 }
                                 props.toggleFollowingProgress(false, u.id);
                             })  
                            // followAPI.followUser().then(data => {
                            //     if(data.resultCode == 0) {
                            //         props.follow(u.id)
                            //     }
                            // })                   
                            }}>FOLLOW</button>}
                </div>
                <div className={classes.description}>
                    <div className={classes.left}>
                        {u.name}
                        <br />
                        {u.status}
                    </div>
                    <div className={classes.right}>
                        {'u.location.country'}
                        <br />
                        {'u.location.city'}
                    </div>
                </div>
            </div>)}
        <div className={classes.pageNumber}>
            {pages.map(p => {
                return <span className={props.currentPage === p && classes.selected}
                    onClick={(e) => { props.onPageChanged(p) }}>{p}</span>
            })}
        </div>
    </div>
};

export default Users;
