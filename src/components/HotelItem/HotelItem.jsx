import React from 'react'
import Favourite from '../UI/Favourite/Favourite'
import classes from './HotelItem.module.css'

const HotelItem = (props) => {
  return (
    <div className={classes.hotel}>
      <div className={classes.header}>
        <div className={classes.title}>Title</div>
        <Favourite />
      </div>
      <div className={classes.date}>date</div>
      <div className={classes.footer}>
        <div className={classes.raiting}></div>
        <div>
          <span className={classes.price}>Price:</span>
          <span className={classes.value}>1111</span>
        </div>
      </div>
    </div>
  )
}

export default HotelItem