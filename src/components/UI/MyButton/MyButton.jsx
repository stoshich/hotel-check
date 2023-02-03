import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ onClick, children }) => {
  return (
    <button
      onClick={onClick}
      className={classes.btn}
    >
      {children}
    </button>
  )
}

export default MyButton