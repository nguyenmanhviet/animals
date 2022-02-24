import React, { useReducer } from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import { initInfor, reducer, enterEmail, enterPassword } from '../reducer/reducer';


const Login = (props) => {
  
  const [infor, dispatch] = useReducer(reducer, initInfor);
  

  infor.isFormValid = (infor.email.includes('@') && infor.password.length > 3) ? true : false;

  const submitHandler = (event) => {
    event.preventDefault();
    props.onLogin(infor.email, infor.password);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="email">E-Mail</label>
          <input
            type="email"
            id="email"
            value={infor.email}
            onChange={(e) => dispatch(enterEmail(e.target.value))}
          />
        </div>
        <div
          className={`${classes.control}`}
        >
          <label htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            value={infor.password}
            onChange={(e) => dispatch(enterPassword(e.target.value))}
          />
        </div>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!infor.isFormValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
