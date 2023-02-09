import React, { useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
import { fetchHotels } from '../../redux/slices/hotelSlice'
import { setDate, setDays } from '../../redux/slices/inputSlice'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import classes from './Search.module.css'

const Search = () => {
  const [location, setLocation] = useState('Москва')
  const [dateInput, setDateInput] = useState(new Date().toISOString().split('T')[0])
  const [daysInput, setDaysInput] = useState('1')
  const date = useSelector(state => state.input.date)
  const days = useSelector(state => state.input.days)
  const dispatch = useDispatch()
  const buttonHandler = () => {
    if (location && date && days) {
      const checkOut = new Date(new Date(date).setDate(new Date(date).getDate() + +days)).toISOString().split('T')[0]
      dispatch(fetchHotels([location, date, checkOut]))
      dispatch(setDate(dateInput))
      dispatch(setDays(daysInput))
    }
  }

  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        <MyInput id='location' type='text' label='Локация' value={location} onChange={e => setLocation(e.target.value)} />
        <MyInput id='date' type='date' label='Дата заселения' value={dateInput} onChange={e => setDateInput(e.target.value)} />
        <MyInput id='days' type='number' label='Количество дней' value={daysInput} onChange={e => setDaysInput(e.target.value)} />
      </div>
      <div className={classes.btn}>
        <MyButton onClick={buttonHandler}>Найти</MyButton>
      </div>
    </div>
  )
}

export default Search