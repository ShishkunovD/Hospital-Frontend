import { useContext } from 'react';
import { Link } from "react-router-dom";
import { AuthContext } from '../context/AuthContext';
import logo from '../Images/Vector.png';
import '../Style/header.css';


const Header = ({ obj }) => {
  const auth = useContext(AuthContext);

  const logoutHandler = () => {
    auth.logout();
  }

  const { logoStr, logoStrN } = obj;

  return (
    <div className='header'>
      <div className='text-logo'>
        <img 
          src={logo} 
          alt='logo' 
          className='logo'
        />
        <div className='logo-str'>{logoStr}</div>
      </div>
      <button className={logoStrN === 'Receptions' ? 'button-exit' : 'hide'} >
        <Link 
          to='/authorization' 
          onClick={() => {logoutHandler()}}
        >
          Выход
        </Link>
      </button>
    </div>
  )
}

export default Header;

