import React, { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import Snack from "../../snackbar/Snackbar";

const Form = ({obj}) => {
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
  const [isSnackLP, setSnackLP] = useState(false);

  const [loginInputs, setLoginInputs] = useState({
    inputLogin: errorLogin,
    loginDirty: false,
    login: ''
  });

  const [passwordInputs, setPasswordInputs] = useState({
    inputPassword: errorPassword,
    passwordDirty: false,
    password: ''
  });

  const [passwordRepeatInputs, setPasswordRepeatInputs] = useState({
    passwordRepeat: errorRepeatPassword,
    passwordRepeatDirty: false,
    passwordRepeatS: ''
  })

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
  setPasswordInputs({...passwordInputs, password : valuePassword});
  console.log({...passwordInputs});
  (reg && resultNumber && valuePassword.length > 5) ?
  setPasswordInputs({...passwordInputs, inputPassword: correctPassword}) :
  setPasswordInputs({...passwordInputs, inputPassword: errorPassword});
  checkPasswords(valuePassword, passwordRepeatInputs.passwordRepeatS);
}

const onChangePasswordRepeat = (e) => {
  const valuePasswordRepeat = e.target.value;
  passwordRepeatInputs(valuePasswordRepeat);
  checkPasswords(passwordInputs.password, valuePasswordRepeat);
  if (!valuePasswordRepeat.length) {
    passwordRepeatInputs({...passwordRepeatInputs, passwordRepeat: errorRepeatPassword});
  }
}

const checkPasswords = (pass, repeat) => {
  setPasswordRepeatInputs(pass === repeat ? correctRepeatPassword : errorRepeatPassword);
}

const signIn = async () => {
  if (loginInputs.inputLogin === correctLogin && passwordInputs.inputPassword === correctPassword) {
     const resp = await fetch ('http://localhost:8000/api/auth/login', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        "login": loginInputs.login.trim(),
        "password": passwordInputs.password.trim()
      })
    });
    
      if (resp.status !== 200) {
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
  if (loginInputs.inputLogin === correctLogin && 
    passwordInputs.inputPassword === correctPassword && 
    passwordRepeatInputs.passwordRepeat === correctRepeatPassword) {
    const resp = await fetch ('http://localhost:8000/api/auth/registrationsend', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*'
      },
      body: JSON.stringify({
        "login": loginInputs.login.trim(),
        "password": passwordInputs.password.trim()
      })
    });
    if (resp.status !== 200) {
      setSnackLP(true);
    } else {
      setLoginInputs({...loginInputs, login: '', inputLogin: '', });
      setPasswordInputs({...passwordInputs, password: '', inputPassword: ''});
      setPasswordRepeatInputs({...passwordRepeatInputs, passwordRepeatS: '', passwordRepeat: ''});
    }
  } else {
    setIsSnackOpen(true);
  }
}

console.log(loginInputs);

  return(
    <div className='form'>
      <div className='content-form'>
        <div className='title-form'>{titleStr}</div>

        <div className="login-block">
          <span>Login:</span>
          <input 
            defaultValue={loginInputs.login} 
            className='login' 
            name='login' 
            placeholder='Login' 
            onBlur={(e) => onBlurHandler(e)} 
            onKeyUp={(e) => onChangeInputLogin(e)} 
          />
          {(loginInputs.loginDirty && loginInputs.inputLogin) && 
            <span 
              className = {loginInputs.inputLogin === errorLogin ? 'red' : 'green'}
            >
              {loginInputs.inputLogin}
            </span>
          }
        </div>

        <div className="password-block">
          <span>Password:</span>
          <input 
            defaultValue={passwordInputs.password} 
            className='password' 
            name='password' 
            placeholder='Password' 
            onBlur={(e) => {onBlurHandler(e)}} 
            onKeyUp={(e) => onChangeInputPassword(e)}  
          />
          {(passwordInputs.passwordDirty && passwordInputs.inputPassword) && 
            <span 
              className = {passwordInputs.inputPassword === errorPassword ? 'red' : 'green'}
            >
            {passwordInputs.inputPassword}
            </span>
          }
        </div>

        <div className={titleStrN === 'Registration' ? "repeat-password-block" :"hide"}>
          <span>Repeat password:</span>
          <input 
            defaultValue={passwordRepeatInputs.passwordRepeatS} 
            className='password' 
            name='passwordRepeat' 
            placeholder='Password' 
            onBlur={(e) => {onBlurHandler(e)}} 
            onKeyUp = {(e) => {onChangePasswordRepeat(e)}}
          />
          {(passwordRepeatInputs.passwordRepeatDirty && passwordRepeatInputs.passwordRepeat) && 
          <span 
            className = {passwordRepeatInputs.passwordRepeat === errorRepeatPassword ? 
            'red' : 
            'green'}
          >
            {passwordRepeatInputs.passwordRepeat}
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
        isOpenLP={isSnackLP}
        onSetIsSnackOpen={setIsSnackOpen}
        setSnackLP={setSnackLP}
      />
    </div>
  )
}

export default Form;