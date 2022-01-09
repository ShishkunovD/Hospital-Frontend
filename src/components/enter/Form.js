import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({titleStr, enterStr, enterJump}) => {
  const [inputLogin, setInputLogin] = useState();
  const [inputPassword, setInputPassword] = useState();
  const [passwordRepeat, setPasswordRepeat] = useState();

  const password = React.createRef();
  const passwordRepeatRef = React.createRef();

  const onChangeInputLogin = (e) => {
    let str = e.target.value;
    if(str.trim().length >= 6) {
      setInputLogin('Login is correctly');
    }else if(str.length === 0) {
      setInputLogin('');
    } else {
      setInputLogin('Login must contain at least 6 characters');
    }
  }

  const onBlurLogin = (e) => {
    if(inputLogin === 'Login must contain at least 6 characters') {
      e.target.value = '';
      setInputLogin('')
    }
  }

  const onChangeInputPassword = (e) => {
  let str = e.target.value;
  let resultSymbol = false;
  let array = str.trim().split('');
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', 
  '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
  for(let i = 0; i < array.length; i++) {
    let timeNumb = array[i];
    for(let k = 0; k < arr.length; k++) {
      if(timeNumb === arr[k]) {
        resultSymbol = true;
        break;
      } else {
        resultSymbol = false;
      }
    }
    if(resultSymbol === false) {
      break;
    }
  }

  let arrayNumber = array.map(item => {
    return +item;
  });

  let resultNumber = arrayNumber.some(item => {
    if(+item || +item === 0) {
      return true;
    }
  })
  if(resultSymbol && resultNumber && array.length >= 6) {
    setInputPassword('Password is correctly');
  } else if(str.length === 0) {
    setInputPassword('');
  } else {
    setInputPassword(`Password isn't correctly`);
  }
}

const onBlurPassword = (e) => {
  if(inputPassword === `Password isn't correctly`) {
    e.target.value = '';
    setInputPassword('');
  }
}

const checkMainInput = (e) => {
  if(password.current.value.length === 0) {
    passwordRepeatRef.current.value = '';
    setPasswordRepeat('');
  }
  else if(e.target.value !== passwordRepeatRef.current.value && passwordRepeatRef.current.value.length > 0) {
    setPasswordRepeat('Incorrectly');
  } else if (e.target.value === passwordRepeatRef.current.value && passwordRepeatRef.current.value.length > 0) {
    setPasswordRepeat('Correctly');
  }
}

const onChangePasswordRepeat = (e) => {
  let str = e.target.value;
  if(password.current.value === str) {
    setPasswordRepeat('Correctly');
  } else {
    setPasswordRepeat('Incorrectly');
  }
}

  return(
    <div className='form'>
      <div className='content-form'>
        <div className='title-form'>{titleStr}</div>

        <div className="login-block">
          <span>Login:</span>
          <input className='login' placeholder='Login' onChange={(e) => {onChangeInputLogin(e)}} onBlur={(e) => {onBlurLogin(e)}}/>
          <span className={inputLogin === 'Login is correctly' ? 'green' : 'red'}>{inputLogin}</span>

        </div>

        <div className="password-block">
          <span>Password:</span>
          <input className='password' placeholder='Password' type='text' ref={password} onChange={(e) => {onChangeInputPassword(e); checkMainInput(e)}} onBlur={(e) => {onBlurPassword(e)}} />
          <span className={inputPassword === 'Password is correctly' ? 'green' : 'red'}>{inputPassword}</span>
        </div>

        <div className={titleStr === 'Регистрация' ? "repeat-password-block" : "hide"}>
          <span>Repeat password:</span>
          <input className='password' placeholder='Password' ref={passwordRepeatRef} onChange = {(e) => {onChangePasswordRepeat(e)}}/>
          <span className={passwordRepeat === 'Correctly' ? 'green' : 'red'}>{passwordRepeat}</span>
        </div>

        {titleStr === 'Войти в систему' ? <button className='btn-enter'>{enterStr}</button> : <button className='btn-registr'>{enterStr}</button>}
        {titleStr === 'Войти в систему' ? 
        <Link className='link' to='/registration'><div className="enter-jump">{enterJump}</div></Link> : 
        <Link className='link' to='/authorization'><div className="enter-jump">{enterJump}</div></Link>}
      </div>
    </div>
  )
}

export default Form;