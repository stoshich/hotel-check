import React from 'react'
import { Link } from 'react-router-dom'
import Favourite from '../../components/UI/Favourite/Favourite'
import MyButton from '../../components/UI/MyButton/MyButton'
import MyInput from '../../components/UI/MyInput/MyInput'
import classes from './Auth.module.css'

const Auth = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blur}>
        <div className={classes.window}>
          <div className={classes.title}>Simple Hotel Check</div>
          <Favourite />
          <div className={classes.inputs}>
            <MyInput id='login' label='Логин' type='text' />
            <MyInput id='pass' label='Пароль' type='password' error='Ошибка' />
          </div>
          <div className={classes.btn}>
            <MyButton>Войти</MyButton>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth