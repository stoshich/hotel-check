import React from 'react'

const MyInput = ({ id, type }) => {
  return (
    <div>
      <label htmlFor={id}></label>
      <input
        id={id}
        className={classes.input}
        type={type}
      />
    </div>
  )
}

export default MyInput