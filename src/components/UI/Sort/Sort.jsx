import React from 'react'
import classes from './Sort.module.css'

const Sort = ({ title }) => {
  return (
    <div className={classes.sort}>
      <div className={classes.title}>{title}</div>
      <div className={classes.icons}>
        1
      </div>
    </div>
  )
}

export default Sort