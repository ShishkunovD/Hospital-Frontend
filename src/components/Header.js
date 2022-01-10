import { useContext } from "react";
import { AuthContext } from "../context/AuthContext";
import logo from '../Images/Vector.png';

const Header = ({logoStr}) => {

  const auth = useContext(AuthContext)

  const logoutHandler = () => {
    auth.logout();
  }

  return(
  <div className='header'>
    <div className='text-logo'>
      <img src={logo} alt='logo' className='logo'/>
      <div className='logoStr'>{logoStr}</div>
    </div>
        <button className={logoStr === 'Приемы' ? 'button-exit' : 'hide'} >
          <a href='/authorization' onClick={() => {logoutHandler()}}>Выход</a>
        </button>
  </div>
  )
}

export default Header;

