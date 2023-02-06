import React from 'react'
import classes from './Header.module.css'
import logout from '../../assets/log_out.svg'


const Header = () => {
  return (
    <div className={classes.header}>
      <div className={classes.logo}>Simple Hotel Check</div>
      <div className={classes.logout}>
        <div className={classes.logoutTitle}>Выйти</div>
        <div className={classes.logoutLogo}>
          <img src={logout} alt="" />
        </div>
      </div>
    </div>
  )
}

export default Header