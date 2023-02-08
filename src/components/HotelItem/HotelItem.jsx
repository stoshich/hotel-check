import React from 'react'
import Favourite from '../UI/Favourite/Favourite'
import classes from './HotelItem.module.css'

const HotelItem = (props) => {
  const { hotelName, priceFrom, hotelId, stars } = props
  return (
    <div className={classes.hotel}>
      <div className={classes.header}>
        <div className={classes.title}>{hotelName}</div>
        <Favourite {...props} check={true} />
      </div>
      <div className={classes.date}>date</div>
      <div className={classes.footer}>
        <div className={classes.raiting}>{stars}</div>
        <div>
          <span className={classes.price}>Price:</span>
          <span className={classes.value}>{priceFrom}</span>
        </div>
      </div>
    </div>
  )
}

export default HotelItem