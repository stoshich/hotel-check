import React from 'react'
import classes from './MyButton.module.css'

const MyButton = ({ onClick, children, disabled }) => {
  return (
    <button
      onClick={onClick}
      className={classes.btn}
      disabled={disabled}
    >
      {children}
    </button>
  )
}

export default MyButton