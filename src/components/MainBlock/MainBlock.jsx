import React from 'react'
import classes from './MainBlock.module.css'

const MainBlock = () => {
  return (
    <div className={classes.container}>
      <div className={classes.header}></div>
      <div className={classes.photos}></div>
      <div className={classes.hotels}></div>
    </div>
  )
}

export default MainBlock