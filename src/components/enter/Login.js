import Header from "../Header"
import MainEnter from "./MainEnter";

const Login = () => {

  const logoStr = 'Войти в систему'
  const titleStr = 'Войти в систему';
  const enterStr = 'Войти';
  const enterJump = 'Зарегистрироваться'

  return(
    <>
      <Header logoStr={logoStr}/>
      <MainEnter titleStr={titleStr} enterStr={enterStr} enterJump={enterJump}/>
    </>
  )
}

export default Login;