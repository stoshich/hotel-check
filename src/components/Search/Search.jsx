import React from 'react'
import MyButton from '../UI/MyButton/MyButton'
import MyInput from '../UI/MyInput/MyInput'
import classes from './Search.module.css'

const Search = () => {
  return (
    <div className={classes.container}>
      <div className={classes.inputs}>
        <MyInput id='location' type='text' label='Локация' />
        <MyInput id='date' type='date' label='Дата заселения' />
        <MyInput id='days' type='number' label='Количество дней' />
      </div>
      <div className={classes.btn}>
        <MyButton>Найти</MyButton>
      </div>
    </div>
  )
}

export default Search