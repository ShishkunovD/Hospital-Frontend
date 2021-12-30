import React from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

const Form = ({titleStr, enterStr, enterJump}) => {
  const [valueInput, setValueInput] = useState();
  const inputPassword = React.createRef();
  // const resultArray = [];
  let resultString = '';

  const onChangeInputLogin = (e) => {
  // if(e.target.value.trim().length < 6) {
  //   setValueInput('Login must be at least 6 characters');
  // } else {
    
  //   setValueInput('Correct Login');
  // }

}

const checkLatin = (e) => {
  const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z'];
  let l = e.target.value.length - 1;
  let result = arr.indexOf(e.target.value[l]);
  if(result !== -1) {
    return true;
  } else {
    return false;
  }

// console.log(e.target.value[l]);
}

// const checkNumber = (e) => {
//   const arr = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   let l = e.target.value.length - 1;
//   let result = arr.indexOf(e.target.value[l]);
//   if(result !== -1) {
//     console.log(true);
//   } else {
//     console.log(false);
//   }
// }

// const checkValue = (e) => {
//   const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
//   let str = e.target.value;
//   let resultValue = arr.indexOf(str[str.length - 1]);
//   if(resultValue !== -1) {
//     resultArray.push(str[str.length - 1]);
//   }
//   resultString = resultArray.join('');
//   // console.log(resultString);
//   // inputPassword.current.value = resultString;
// } 

const valueInpuTT = (e) => {
  if(e.target.value.trim().length < 6) {
    setValueInput('Login must be at least 6 characters');
  } else {
    const arr = ['a', 'b', 'c', 'd', 'e', 'f', 'g', 'h', 'i', 'j', 'k', 'l', 'm', 'n', 'o', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 'y', 'z', '1', '2', '3', '4', '5', '6', '7', '8', '9', '0'];
    let str = e.target.value;
    let resultValue = arr.indexOf(str[str.length - 1]);
    const array = str.split('');
    const newArray1 = [];
    const newArray2 = [];
      if(+str[str.length - 1] === typeof 7) {
        newArray1.push(+str[str.length - 1])
      }
    // const resultArray = newArray.every((item => {
    //   if(typeof item == typeof 7) return true
    // }));
    console.log(+str[str.length - 1]);

    // console.log(resultArray);
    if(resultValue !== -1 ) {
      setValueInput('Password is correctly');
    } else {
      setValueInput(`Password isn't correctly`)
    }
  }
  // console.log(e);
}


const onBlurPassword = (e) => {
  if(e.target.value.trim().length > 6) {
    setValueInput('');
  } else {
    e.target.value = '';
    setValueInput('');
  }
}

  return(
    <div className='form'>
      <div className='content-form'>
        <div className='title-form'>{titleStr}</div>

        <div className="login-block">
          <span>Login:</span>
          <input className='login' placeholder='Login' />

        </div>

        <div className="password-block">
          <span>Password:</span>
          <input className='password' placeholder='Password' type='text' ref={inputPassword} onChange={(e) => {valueInpuTT(e);  }} onBlur = {(e) => onBlurPassword(e)}/>
          <span className={valueInput === 'Correct Login' ? 'green' : 'red'}>{valueInput}</span>
        </div>

        <div className={titleStr === 'Регистрация' ? "repeat-password-block" : "hide"}>
          <span>Repeat password:</span>
          <input className='password' placeholder='Password'/>
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