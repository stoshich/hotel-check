import React from 'react'
import { useSelector } from 'react-redux'
import HotelItem from '../HotelItem/HotelItem'
import Sort from '../UI/Sort/Sort'
import classes from './Favourites.module.css'

const Favourites = () => {
  const favHotels = useSelector(state => state.favourites.favourites)
  return (
    <div className={classes.container}>
      <div className={classes.title}>Избранное</div>
      <div className={classes.sort}>
        <Sort title='Рейтинг' />
        <Sort title='Цена' />
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