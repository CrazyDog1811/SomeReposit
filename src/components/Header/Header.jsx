import React from 'react';
import classes from'./Header.module.css';
import { NavLink } from 'react-router-dom';

const Header = (props) => {
    return  <header className={classes.header}>
    <img className={classes.logo} src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="Some logo" width="150" height="150"></img>
   <div className={classes.loginBlock}>
     { props.isAuth ? props.login :
     <NavLink to={'/login'}>login</NavLink>}
   </div>
  </header>
}
export default Header;