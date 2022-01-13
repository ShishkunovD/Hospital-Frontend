import Header from "../Header";
import MainEnter from "./MainEnter";

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
  }

  return (
    <div>
      <Header obj={obj}/>
      <MainEnter obj={obj}/>
    </div>
  );
}

export default Registration;