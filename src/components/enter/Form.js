import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Snack from "../../snackbar/Snackbar";
import SnackBarLP from "../../snackbar/SnackBarLP";


const Form = ({obj}) => {
  const auth = useContext(AuthContext);

  const objMessage = {
    correctLogin: 'Login is correctly',
    errorLogin: 'Login must contain at least 6 characters',
    correctPassword: 'Password is correctly',
    errorPassword: `Password isn't correctly`,
    correctRepeatPassword: 'Correctly',
    errorRepeatPassword: 'Incorrectly'
  }

  const {
    titleStr,
    titleStrN,
    enterStr,
    enterJump
  } = obj;

  const {
    correctLogin,
    errorLogin,
    correctPassword,
    errorPassword,
    correctRepeatPassword,
    errorRepeatPassword
  } 
  = objMessage;

  // Working with SnackBar
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [isSnackLP, setSnackLP] = useState(false);

  //Check inputs
  const [inputLogin, setInputLogin] = useState(errorLogin);
  const [inputPassword, setInputPassword] = useState(errorPassword);
  const [passwordRepeat, setPasswordRepeat] = useState(errorRepeatPassword);

  const [loginDirty, setLoginDirty] = useState(false);
  const [passwordDirty, setPasswordDirty] = useState(false);
  const [passwordRepeatDirty, setPasswordRepeatDirty] = useState(false);

  //inputs
  const [login, setLogin] = useState('');
  const [password, setPassword] = useState('');
  const [passwordRepeatS, setPasswordRepeatS] = useState('');

  const onChangeInputLogin = (e) => {
    setLogin(e.target.value);
    if(e.target.value.trim().length > 5) {
      setInputLogin(correctLogin);
    } else {
      setInputLogin(errorLogin);
    }
  }

  const onBlurHandler = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginDirty(true);
        break;
      case 'password': 
        setPasswordDirty(true);
        break;
      case 'passwordRepeat':
        setPasswordRepeatDirty(true);
        break;
    }
  }

  const onChangeInputPassword = (e) => {
  setPassword(e.target.value);
  let reg = (/^[A-Za-z0-9]+$/).test(e.target.value);
  let array = e.target.value.trim().split('');
  let arrayNumber = array.map(item => {
    return +item;
  });
  
  let resultNumber = arrayNumber.some(item => {
    if (+item || +item === 0) {
      return true;
    }
  })
  if (reg && resultNumber && e.target.value.length > 5)  {
    setInputPassword(correctPassword);
  } else {
    setInputPassword(errorPassword);
  }
  checkPasswords(e.target.value, passwordRepeatS);
}

const onChangePasswordRepeat = (e) => {
  setPasswordRepeatS(e.target.value);
  checkPasswords(password, e.target.value);
  if(e.target.value.length === 0) {
    setPasswordRepeat(errorRepeatPassword);
  }
}

const checkPasswords = (pass, repeat) => {
  setPasswordRepeat(pass === repeat ? correctRepeatPassword : errorRepeatPassword);
}

const signIn = async () => {
  if(inputLogin === correctLogin && inputPassword === correctPassword) {
     const resp = await fetch ('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        "login": login.trim(),
        "password": password.trim()
      })
    });
    
      if(resp.status !== 200) {
        setSnackLP(true);
      } else {
        const result = await resp.json();
        auth.loginCheck(result.token);
      }
  } else {
    setIsSnackOpen(true);
  }
}

const register = async () => {
  if(inputLogin === correctLogin && 
    inputPassword === correctPassword && 
    passwordRepeat === correctRepeatPassword) {
    const resp = await fetch ('http://localhost:8000/api/auth/registrationsend', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        "login": login.trim(),
        "password": password.trim()
      })
    });
    if(resp.status !== 200) {
      setSnackLP(true);
    } else {
      setLogin('');
      setPassword('');
      setPasswordRepeatS('');
      setInputLogin('');
      setInputPassword('');
      setPasswordRepeat('');
    }
  } else {
    setIsSnackOpen(true);
  }
}

  return(
    <div className='form'>
      <div className='content-form'>
        <div className='title-form'>{titleStr}</div>

        <div className="login-block">
          <span>Login:</span>
          <input 
            defaultValue={login} 
            className='login' 
            name='login' 
            placeholder='Login' 
            onBlur={(e) => {onBlurHandler(e)}} 
            onKeyUp={(e) => {onChangeInputLogin(e)}} 
          />
          {(loginDirty && inputLogin) && 
          <span 
            className = {inputLogin === errorLogin ? 'red' : 'green'}>
            {inputLogin}
          </span>
          }
        </div>

        <div className="password-block">
          <span>Password:</span>
          <input 
            defaultValue={password} 
            className='password' 
            name='password' 
            placeholder='Password' 
            onBlur={(e) => {onBlurHandler(e)}} 
            onKeyUp={(e) => {onChangeInputPassword(e)}}  
          />
          {(passwordDirty && inputPassword) && 
          <span 
            className = {inputPassword === errorPassword ? 'red' : 'green'}>
            {inputPassword}
          </span>
          }
        </div>

        <div className={titleStrN === 'Registration' ? "repeat-password-block" : "hide"}>
          <span>Repeat password:</span>
          <input 
            defaultValue={passwordRepeatS} 
            className='password' 
            name='passwordRepeat' 
            placeholder='Password' 
            onBlur={(e) => {onBlurHandler(e)}} 
            onKeyUp = {(e) => {onChangePasswordRepeat(e)}}
          />
          {(passwordRepeatDirty && passwordRepeat) && 
          <span 
            className = {passwordRepeat === errorRepeatPassword ? 'red' : 'green'}>
            {passwordRepeat}
          </span>}
        </div>

        {titleStrN === 'Enter in system' ? 
        <button 
          className='btn-enter' 
          onClick={() => {signIn()}}
        >
          {enterStr}
        </button> : 
        <button 
          className='btn-registr' 
          onClick={() => {register()}}>
          {enterStr}
        </button>}

        {obj.titleStrN === 'Enter in system' ? 
        <Link 
          className='link' 
          to='/registration'>
          <div 
            className="enter-jump">
            {enterJump}
          </div>
        </Link> : 
        <Link 
        className='link' 
        to='/authorization'>
        <div 
          className="enter-jump">
          {enterJump}
        </div>
        </Link>}
      </div>
      <Snack 
        isOpen={isSnackOpen} 
        onSetIsSnackOpen={setIsSnackOpen}
      />
      <SnackBarLP 
        isOpen={isSnackLP}
        setSnackLP={setSnackLP}
      />
    </div>
  )
}

export default Form;