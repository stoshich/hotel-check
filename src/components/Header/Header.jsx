import React from 'react'
import classes from './Header.module.css'
import logout from '../../assets/log_out.svg'
import { Link } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { resetFavourites } from '../../redux/slices/favouriteSlice'
import { resetInputs } from '../../redux/slices/inputSlice'


const Header = () => {

  const dispatch = useDispatch()

  const logOutHandler = () => {
    dispatch(resetFavourites())
    dispatch(resetInputs())
  }

  return (
    <div className={classes.header}>
      <div className={classes.logo}>Simple Hotel Check</div>
      <Link to='/'>
        <div onClick={logOutHandler} className={classes.logout}>
          <div className={classes.logoutTitle}>Выйти</div>
          <div className={classes.logoutLogo}>
            <img src={logout} alt="" />
          </div>
        </div>
      </Link>
    </div>
  )
}

export default Header