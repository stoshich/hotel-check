import React from 'react'
import classes from './MainBlock.module.css'
import vector from '../../assets/mainblock.svg'
import Photo from '../UI/Photo/Photo'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import pictures from '../../items/pictures'
import BigHotelItem from '../BigHotelItem/BigHotelItem'
import { useSelector } from 'react-redux'

const MainBlock = () => {
  const hotels = useSelector(state => state.hotels.hotels)
  const favAmount = useSelector(state => state.favourites.favourites).length
  const scrollRef = useHorizontalScroll()
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.city}><span>Отели </span><img src={vector} alt="" /><span>Москва</span></div>
        <div className={classes.date}>7 июля 2020</div>
      </div>
      <div ref={scrollRef} className={classes.photos}>
        {pictures.map((pic, index) =>
          <Photo
            key={index}
            source={pic}
          />
        )}
      </div>
      <div className={classes.hotels}>
        <div className={classes.info}>Добавлено в избранное: <span>{favAmount}</span> отеля </div>
        <div className={classes.items}>
          {hotels.map(hotel =>
            <BigHotelItem
              key={hotel.hotelId}
              {...hotel}
            />
          )}
        </div>
      </div>
    </div>
  )
}

export default MainBlock