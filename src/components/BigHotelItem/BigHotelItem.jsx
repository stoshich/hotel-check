import React from 'react'
import classes from './BigHotelItem.module.css'
import house from '../../assets/house.svg'
import Favourite from '../UI/Favourite/Favourite'

const BigHotelItem = (props) => {
  const { hotelName, priceFrom, stars } = props
  return (
    <div className={classes.hotel}>
      <div className={classes.picture}>
        <img src={house} alt="" />
      </div>
      <div className={classes.content}>
        <div className={classes.header}>
          <div className={classes.title}>{hotelName}</div>
          <Favourite {...props} check={false} />
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
    </div>
  )
}

export default BigHotelItem