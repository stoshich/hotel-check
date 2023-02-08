import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchHotels } from '../../redux/slices/hotelSlice'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import classes from './Search.module.css'

const Search = () => {
  const [location, setLocation] = useState('')
  const [date, setDate] = useState('')
  const [days, setDays] = useState('')
  const [checkOut, setCheckOut] = useState('')
  const dispatch = useDispatch()
  const buttonHandler = () => {
    if (location && date && days) {
      setCheckOut(new Date(new Date(date).setDate(new Date(date).getDate() + days)).toISOString().split('T')[0])
      dispatch(fetchHotels([location, date, checkOut]))
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        <MyInput id='location' type='text' label='Локация' value={location} onChange={e => setLocation(e.target.value)} />
        <MyInput id='date' type='date' label='Дата заселения' value={date} onChange={e => setDate(e.target.value)} />
        <MyInput id='days' type='number' label='Количество дней' value={days} onChange={e => setDays(e.target.value)} />
      </div>
      <div className={classes.btn}>
        <MyButton onClick={buttonHandler}>Найти</MyButton>
      </div>
    </div>
  )
}

export default Search