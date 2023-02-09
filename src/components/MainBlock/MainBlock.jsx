import React, { useEffect } from 'react'
import classes from './MainBlock.module.css'
import vector from '../../assets/mainblock.svg'
import Photo from '../UI/Photo/Photo'
import { useHorizontalScroll } from '../../hooks/useHorizontalScroll'
import pictures from '../../items/pictures'
import BigHotelItem from '../BigHotelItem/BigHotelItem'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotels } from '../../redux/slices/hotelSlice'

const MainBlock = () => {
  const hotels = useSelector(state => state.hotels.hotels)
  const favAmount = useSelector(state => state.favourites.favourites).length
  const scrollRef = useHorizontalScroll()
  const dispatch = useDispatch()
  const date = useSelector(state => state.input.date)

  useEffect(() => {
    const dateIn = new Date().toISOString().split('T')[0]
    const dateOut = new Date(new Date(dateIn).setDate(new Date(dateIn).getDate() + 1)).toISOString().split('T')[0]
    dispatch(fetchHotels(['Москва', dateIn, dateOut]))
  }, [])

  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.city}><span>Отели </span><img src={vector} alt="" /><span>{hotels[0]?.location.name}</span></div>
        <div className={classes.date}>{date}</div>
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