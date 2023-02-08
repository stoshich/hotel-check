import React from 'react'
import classes from './MainBlock.module.css'
import vector from '../../assets/mainblock.svg'

const MainBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}>
        <div className={classes.city}><span>Отели </span><img src={vector} alt="" /><span>Москва</span></div>
        <div className={classes.date}>7 июля 2020</div>
      </div>
      <div className={classes.photos}>

      </div>
      <div className={classes.hotels}></div>
    </div>
  )
}

export default MainBlock