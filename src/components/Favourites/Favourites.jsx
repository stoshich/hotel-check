import React from 'react'
import HotelItem from '../HotelItem/HotelItem'
import Sort from '../UI/Sort/Sort'
import classes from './Favourites.module.css'

const Favourites = () => {
  return (
    <div className={classes.container}>
      <div className={classes.title}>Избранное</div>
      <div className={classes.sort}>
        <Sort title='Рейтинг' />
        <Sort title='Цена' />
      </div>
      <div className={classes.hotels}>
        <HotelItem />
        <HotelItem />
      </div>
    </div>
  )
}

export default Favourites