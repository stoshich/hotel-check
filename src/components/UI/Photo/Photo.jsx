import React from 'react'
import classes from './Photo.module.css'

const Photo = ({ source }) => {
  return (
    <div className={classes.container}>
      <img src={source} alt="" />
    </div>
  )
}

export default Photo