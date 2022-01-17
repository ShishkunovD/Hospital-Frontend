import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Snack from "../../snackbar/Snackbar";

const Form = ({ obj }) => {
  const auth = useContext(AuthContext);

  const objMessage = {
    correctLogin: 'Login is correctly',
    errorLogin: 'Login must contain at least 6 characters',
    correctPassword: 'Password is correctly',
    errorPassword: `Password isn't correctly`,
    correctRepeatPassword: 'Correctly',
    errorRepeatPassword: 'Incorrectly'
  };

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
  } = objMessage;

  // Working with SnackBar
  const [isSnackOpen, setIsSnackOpen] = useState(false);
  const [messageSnack, setMessageSnack] = useState('');

  const [loginInputs, setLoginInputs] = useState({
    inputLogin: errorLogin,
    loginDirty: false,
    login: ''
  });

  const {inputLogin, loginDirty, login} = loginInputs;

  const [passwordInputs, setPasswordInputs] = useState({
    inputPassword: errorPassword,
    passwordDirty: false,
    password: ''
  });

  const {inputPassword, passwordDirty, password} = passwordInputs;

  const [passwordRepeatInputs, setPasswordRepeatInputs] = useState({
    passwordRepeat: errorRepeatPassword,
    passwordRepeatDirty: false,
    passwordRepeatS: ''
  });

  const {passwordRepeat, passwordRepeatDirty, passwordRepeatS} = passwordRepeatInputs;

  const onChangeInputLogin = (e) => {
    const valueInput = e.target.value;
    setLoginInputs({
      ...loginInputs, 
      login: valueInput, 
      inputLogin: valueInput.trim().length > 5 ? correctLogin : errorLogin
    });
  }

  const onBlurHandler = (e) => {
    switch (e.target.name) {
      case 'login':
        setLoginInputs({...loginInputs, loginDirty: true});
        break;
      case 'password': 
        setPasswordInputs({...passwordInputs, passwordDirty: true});
        break;
      case 'passwordRepeat':
        setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeatDirty: true});
        break;
    }
  }

  const onChangeInputPassword = (e) => {
  const valuePassword = e.target.value;
  const reg = (/^[A-Za-z0-9]+$/).test(valuePassword);
  const resultNumber = (/(?=.*\d)/).test(valuePassword);
  setPasswordInputs({...passwordInputs, password : valuePassword });
  setPasswordInputs((reg && resultNumber && valuePassword.length > 5) ?
  {...passwordInputs, password: valuePassword, inputPassword: correctPassword} :
  {...passwordInputs, password: valuePassword, inputPassword: errorPassword});
  checkPasswords(passwordRepeatS, valuePassword);
}

const onChangePasswordRepeat = (e) => {
  const valuePasswordRepeat = e.target.value;
  setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeatS: valuePasswordRepeat});
  checkPasswords(valuePasswordRepeat, password); 
}

const checkPasswords = (pass, repeat) => {
  pass === repeat ?
  setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeat: correctRepeatPassword}) :
  setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeat: errorRepeatPassword});
}

const signIn = async () => {
  if (inputLogin === correctLogin && inputPassword === correctPassword) {
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
    
      if (resp.status !== 200) {
        setMessageSnack('Wrong login or password');
        setIsSnackOpen(true);
      } else {
        const result = await resp.json();
        auth.loginCheck(result.token);
      }
  } else {
    setMessageSnack('The entered data is not correct');
    setIsSnackOpen(true);
  }
}

const register = async () => {
  if (inputLogin === correctLogin && 
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
    if (resp.status !== 200) {
      setMessageSnack('Wrong login or password');
      setIsSnackOpen(true);
    } else {
      setLoginInputs({...loginInputs, login: '', inputLogin: '', });
      setPasswordInputs({...passwordInputs, password: '', inputPassword: ''});
      setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeatS: '', passwordRepeat: ''});
    }
  } else {
    setMessageSnack('The entered data is not correct');
    setIsSnackOpen(true);
  }
}

  return (
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
            onBlur={(e) => onBlurHandler(e)} 
            onKeyUp={(e) => onChangeInputLogin(e)} 
          />
          {(loginDirty && inputLogin) && 
            <span 
              className = {inputLogin === errorLogin ? 'red' : 'green'}
            >
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
            onBlur={(e) => onBlurHandler(e)} 
            onKeyUp={(e) => onChangeInputPassword(e)}  
          />
          {(passwordDirty && inputPassword) && 
            <span 
              className = {inputPassword === errorPassword ? 'red' : 'green'}
            >
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
            onBlur={(e) => onBlurHandler(e)} 
            onKeyUp = {(e) => onChangePasswordRepeat(e)}
          />
          {(passwordRepeatDirty && passwordRepeat) && 
          <span 
            className = {passwordRepeat === errorRepeatPassword ? 'red' : 'green'}
          >
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

        {titleStrN === 'Enter in system' ? 
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
        messageSnack={messageSnack}
      />
    </div>
  )
}

export default Form;