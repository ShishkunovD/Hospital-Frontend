import Header from "../Header";
import MainEnter from "./MainEnter";

const Registration = () => {

  const logoStr = 'Зарегистрироваться в системе'
  const titleStr = 'Регистрация'
  const enterStr = 'Зарегистрироваться'
  const enterJump = 'Авторизоваться'

  return(
    <div>
      <Header logoStr={logoStr}/>
      <MainEnter titleStr={titleStr} enterStr={enterStr} enterJump={enterJump}/>
    </div>
  )
}

export default Registration;