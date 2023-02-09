import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { fetchHotels } from '../../redux/slices/hotelSlice'
import { setDate, setDays } from '../../redux/slices/inputSlice'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import classes from './Search.module.css'

const Search = () => {
  const [location, setLocation] = useState('Москва')
  const [dateInput, setDateInput] = useState(new Date().toISOString().split('T')[0])
  const [daysInput, setDaysInput] = useState('1')
  const dispatch = useDispatch()
  const buttonHandler = () => {
    if (location && dateInput && daysInput) {
      const checkOut = new Date(new Date(dateInput).setDate(new Date(dateInput).getDate() + +daysInput)).toISOString().split('T')[0]
      dispatch(fetchHotels([location, dateInput, checkOut]))
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