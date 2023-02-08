import React from 'react'
import classes from './MyInput.module.css'

const MyInput = ({ id, type, label, error, value, onChange }) => {
  const errroClass = error ? classes.inputError : ''
  const labelError = error ? classes.labelError : ''
  return (
    <div className={classes.container}>
      <label className={classes.label + ' ' + labelError} htmlFor={id}>{label}</label>
      <input
        id={id}
        className={classes.input + ' ' + errroClass}
        type={type}
        value={value}
        onChange={onChange}
      />
      {error && <div className={classes.error}>{error}</div>}
    </div>
  )
}

export default MyInput