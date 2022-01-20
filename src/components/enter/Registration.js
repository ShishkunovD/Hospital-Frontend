import React from "react";
import MainEnter from "./MainEnter";
import Header from "../Header";

const Registration = () => {
  const obj = {
    logoStr: 'Зарегестрироваться в системе',
    logoStrN: 'Registration in system',
    titleStr: 'Регистрация',
    titleStrN: 'Registration',
    enterStr: 'Зарегистрироваться',
    enterStrN: 'Registr',
    enterJump: 'Авторизоваться',
    enterJumpN: 'Login'
  };

  return (
    <div>
      <Header obj={ obj }/>
      <MainEnter obj={ obj }/>
    </div>
  );
}

export default Registration;