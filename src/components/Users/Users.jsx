import React from 'react';
import classes from './Users.module.css';

const Users = (props) => {
    if(props.users.length === 0) {
    props.setUsers([ 
    { id: 1, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200", followed: true, fullName: "Jhonny", status: "I'm a Boss", location: {country: "Russia", city: "Moscow"} },
    { id: 2, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200", followed: false, fullName: "Elisa", status: "I'm a Big Boss", location: {country: "Ukraine", city: "Kharkov"} },
    { id: 3, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200", followed: true, fullName: "Portos", status: "F...ck you all, I'm a Boss", location: {country: "Belarus", city: "Brest"} },
    { id: 4, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200", followed: false, fullName: "Eger22", status: "Stupid crazy and happy", location: {country: "Ukraine", city: "Lviv"} },
    { id: 5, photoUrl: "https://avatars.mds.yandex.net/get-zen_doc/235990/pub_5d6554d1027a1500ad1d93bd_5d6554d94e057700ad5e9449/scale_1200", followed: true, fullName: "Lenochka", status: "miu-miu", location: {country: "Russia", city: "Magadan"} }
])
    }
    return <div>
        {props.users.map(u => <div key={u.id} className={classes.users}>
            <div className={classes.avatar}>
                <img src={u.photoUrl} alt="big-ben" width="70" height="70" />
              {u.followed ? 
              <button onClick={() => {props.unfollow(u.id)}}>UNFOLLOW</button> :
               <button onClick={() => {props.follow(u.id)}}>FOLLOW</button>}  
            </div>
            <div className={classes.description}>
                <div className={classes.left}>
                    {u.fullName}
                    <br/>
                    {u.status}
                </div>
                <div className={classes.right}>
                {u.location.country}
                    <br/>
                    {u.location.city}
                </div>
            </div>
        </div>)}
    </div>
};

export default Users;
