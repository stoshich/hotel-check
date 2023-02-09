import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { sortByPriceDESC, sortByPriceASC, sortByRaitingASC, sortByRaitingDESC } from '../../redux/slices/favouriteSlice'
import HotelItem from '../HotelItem/HotelItem'
import Sort from '../UI/Sort/Sort'
import classes from './Favourites.module.css'

const Favourites = () => {
  const favHotels = useSelector(state => state.favourites.favourites)
  const dispatch = useDispatch()
  const [raitingFlag, setRaitingFlag] = useState(false)
  const [priceFlag, setPriceFlag] = useState(false)

  const raitingHandler = () => {
    if (raitingFlag) {
      dispatch(sortByRaitingDESC())
      setRaitingFlag(!raitingFlag)
    } else {
      dispatch(sortByRaitingASC())
      setRaitingFlag(!raitingFlag)
    }
  }
  const priceHandler = () => {
    if (priceFlag) {
      dispatch(sortByPriceDESC())
      setPriceFlag(!priceFlag)
    } else {
      dispatch(sortByPriceASC())
      setPriceFlag(!priceFlag)
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.title}>Избранное</div>
      <div className={classes.sort}>
        <Sort onClick={raitingHandler} title='Рейтинг' flag={raitingFlag} />
        <Sort onClick={priceHandler} title='Цена' flag={priceFlag} />
      </div>
      <div className={classes.hotels}>
        {favHotels.map(hotel =>
          <HotelItem
            key={hotel.hotelId}
            {...hotel}
          />
        )}
      </div>
    </div>
  )
}

export default Favourites