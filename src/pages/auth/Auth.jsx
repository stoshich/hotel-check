import React from 'react'
import classes from './Auth.module.css'

const Auth = () => {
  return (
    <div className={classes.wrapper}>
      <div className={classes.blur}>
        <div className={classes.window}>
          <div className={classes.title}>Simple Hotel Check</div>
          <div className={classes.inputs}>
            <input type="text" />
            <input type="password" />
          </div>
          <div className={classes.btn}>
            <button>Войти</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Auth