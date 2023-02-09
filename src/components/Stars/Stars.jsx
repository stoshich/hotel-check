import React from 'react'
import goldStar from '../../assets/goldStar.svg'
import grayStar from '../../assets/grayStar.svg'
import classes from './Stars.module.css'

const Stars = ({ amount }) => {
  const arr = [1, 2, 3, 4, 5]
  const gray = 5 - amount
  return (
    <>
      {arr.splice(0, amount).map(num => <img key={num} className={classes.star} src={goldStar} alt="" />)}
      {arr.splice(0, gray).map(num => <img key={num} className={classes.star} src={grayStar} alt="" />)}
    </>
  )
}

export default Stars