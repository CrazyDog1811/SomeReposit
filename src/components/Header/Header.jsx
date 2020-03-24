import React from 'react';
import classes from'./Header.module.css';
const Header = () => {
    return  <header className={classes.header}>
    
    <img className={classes.logo} src="https://www.freelogodesign.org/Content/img/logo-ex-7.png" alt="Some logo" width="150" height="150"></img>

  </header>
}
export default Header;