import React from 'react';
import Header from "../Header";
import MainEnter from "./MainEnter";

const Login = () => {
  const obj = {
    logoStr: 'Войти в систему',
    logoStrN : 'Enter in system',
    titleStr: 'Войти в систему',
    titleStrN: 'Enter in system',
    enterStr: 'Войти',
    enterStrN: 'Enter',
    enterJump: 'Зарегистрироваться',
    enterJumpN: 'Register'
  };

  return (
    <>
      <Header obj={ obj }/>
      <MainEnter obj={ obj }/>
    </>
  );
}

export default Login;