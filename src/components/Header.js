import logo from '../Images/Vector.png';
import { useContext } from 'react';
import { AuthContext } from '../context/AuthContext';
import { Link } from "react-router-dom";

const Header = ({ obj }) => {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  }

  return (
    <div className='header'>
      <div className='text-logo'>
        <img 
          src={logo} 
          alt='logo' 
          className='logo'
        />
        <div className='logo-str'>{obj.logoStr}</div>
      </div>
      <button className={obj.logoStrN === 'Receptions' ? 'button-exit' : 'hide'} >
        <Link 
          to='/authorization' 
          onClick={() => {logoutHandler()}}
        >Выход
        </Link>
      </button>
    </div>
  )
}

export default Header;

