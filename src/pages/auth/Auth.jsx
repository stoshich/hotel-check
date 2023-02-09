import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import MyButton from '../../components/UI/MyButton/MyButton'
import MyInput from '../../components/UI/MyInput/MyInput'
import classes from './Auth.module.css'

const Auth = () => {
  const [login, setLogin] = useState('')
  const [password, setPassword] = useState('')
  const [emailError, setEmailError] = useState('Email не может быть пустым')
  const [emailDirty, setEmailDirty] = useState(false)
  const [passDirty, setPassDirty] = useState(false)
  const [passError, setPassError] = useState('Пароль не может быть пустым')
  const [formValid, setFormValid] = useState(false)

  useEffect(() => {
    if (emailError || passError) {
      setFormValid(false)
    } else {
      setFormValid(true)
    }
  }, [emailError, passError])

  const onBlurHandler = (e) => {
    switch (e.target.id) {
      case 'login':
        setEmailDirty(true)
        break
      case 'pass':
        setPassDirty(true)
        break
    }
  }
  const onClickHandler = () => {
    setPassDirty(true)
    setEmailDirty(true)
  }
  const emailHandler = e => {
    setLogin(e.target.value)
    const re = /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;
    if (!re.test(String(e.target.value).toLowerCase())) {
      setEmailError('Некорректный email')
    } else {
      setEmailError('')
    }
  }
  const passHandler = e => {
    setPassword(e.target.value)
    const re = /[а-яё]/
    if (e.target.value.length < 8 || re.test(String(e.target.value).toLowerCase())) {
      setPassError('Пароль должен быть не меньше 8 символов и не содержать кириллицу')
    } else {
      setPassError('')
    }
  }
  return (
    <div className={classes.wrapper}>
      <div className={classes.blur}>
        <div className={classes.window}>
          <div className={classes.title}>Simple Hotel Check</div>
          <div className={classes.inputs}>
            <MyInput
              onBlur={e => onBlurHandler(e)}
              id='login'
              label='Логин'
              type='text'
              error={emailError}
              value={login}
              onChange={e => emailHandler(e)}
              dirty={emailDirty}
            />
            <MyInput
              onBlur={e => onBlurHandler(e)}
              id='pass'
              label='Пароль'
              type='password'
              error={passError}
              value={password}
              onChange={e => passHandler(e)}
              dirty={passDirty}
            />
          </div>
          <div className={classes.btn}>
            {formValid ?
              <Link to='/hotels'>
                <MyButton>Войти</MyButton>
              </Link>
              :
              <MyButton onClick={onClickHandler}>Войти</MyButton>
            }
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth