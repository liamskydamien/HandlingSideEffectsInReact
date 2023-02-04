import React, {useState, useEffect, useReducer, useContext} from 'react';

import Card from '../UI/Card/Card';
import classes from './Login.module.css';
import Button from '../UI/Button/Button';
import AuthContext from "../../context/auth-context";
import authContext from "../../context/auth-context";
import Input from "./Input";

const emailReducer = (state, action) => {
  if(action.type === 'USER_INPUT'){
      return {value: action.val, isValid: action.val.includes('@')};
    }
  if(action.type === 'INPUT_BLUR'){
  return{value: action.val , isValid: false, errorMessage: 'Please enter a valid email address.'}
  }
    return {value: '', isValid: false};
};

const Login = (props) => {
  const [enteredEmail, setEnteredEmail] = useState('');
  const [emailIsValid, setEmailIsValid] = useState(false);
  const [enteredPassword, setEnteredPassword] = useState('');
  const [passwordIsValid, setPasswordIsValid] = useState(false);
  const [formIsValid, setFormIsValid] = useState(false);

  const AuthCTX = useContext(AuthContext).onLogin;

  useEffect(() => {
    const identifier = setTimeout(() => {
        setFormIsValid(
            emailstate.isValid && enteredPassword.trim().length > 6
        );
    }, 500);
    return () => {
      clearTimeout(identifier);
    }
  }, [setFormIsValid, enteredEmail, enteredPassword]);


  const [emailstate, dispatchEMail] = useReducer(emailReducer, {
    value: '',
    isValid: false,
  });

  const emailChangeHandler = (event) => {
    dispatchEMail({type: 'USER_INPUT', val: event.target.value});
    setEnteredEmail(emailstate.value);
  };

  const passwordChangeHandler = (event) => {
    setEnteredPassword(event.target.value);
  };

  const validateEmailHandler = () => {
    dispatchEMail({type: 'INPUT_BLUR', val: enteredEmail});
  };

  const validatePasswordHandler = () => {
    setPasswordIsValid(enteredPassword.trim().length > 6);
  };

  const submitHandler = (event) => {
    event.preventDefault();
    AuthCTX(enteredEmail, enteredPassword);
  };

  return (
    <Card className={classes.login}>
      <form onSubmit={submitHandler}>
        <Input id={"email"}
               type={"email"}
               isValid={emailIsValid}
               value={emailstate}
               onChange={emailChangeHandler}
               onBlur={validateEmailHandler}/>
        <Input id={"password"}
               type={"password"}
               isValid={passwordIsValid}
               value={enteredPassword}
               onChange={passwordChangeHandler}
               onBlur={validatePasswordHandler}/>
        <div className={classes.actions}>
          <Button type="submit" className={classes.btn} disabled={!formIsValid}>
            Login
          </Button>
        </div>
      </form>
    </Card>
  );
};

export default Login;
