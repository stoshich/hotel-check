import React from 'react'
import classes from './MyInput.module.css'

const MyInput = ({ id, type, label, error }) => {
  return (
    <div className={classes.container}>
      <label className={classes.label} htmlFor={id}>{label}</label>
      <input
        id={id}
        className={classes.input}
        type={type}
      />
      {error && <div className={classes.error}>{error}</div>}
    </div>
  )
}

export default MyInput