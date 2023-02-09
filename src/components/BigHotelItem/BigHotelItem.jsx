import React from 'react'
import classes from './BigHotelItem.module.css'
import house from '../../assets/house.svg'
import Favourite from '../UI/Favourite/Favourite'
import { useSelector } from 'react-redux'
import Stars from '../Stars/Stars'

const BigHotelItem = (props) => {
  const { hotelName, priceFrom, stars } = props
  const date = useSelector(state => state.input.date)
  const days = useSelector(state => state.input.days)
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
        <div className={classes.date}>{date} - {days} день</div>
        <div className={classes.footer}>
          <div className={classes.raiting}>
            <Stars amount={stars} />
          </div>
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