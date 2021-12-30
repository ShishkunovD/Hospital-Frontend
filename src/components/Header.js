import logo from '../Images/Vector.png';

const Header = ({logoStr}) => {
  return(
  <div className='header'>
    <img src={logo} alt='logo' className='logo'/>
    <div className='logoStr'>{logoStr}</div>
  </div>
  )
}

export default Header;

