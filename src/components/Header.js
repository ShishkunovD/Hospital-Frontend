import logo from '../Images/Vector.png';

const Header = ({logoStr}) => {
  return(
  <div className='header'>
    <div className='text-logo'>
      <img src={logo} alt='logo' className='logo'/>
      <div className='logoStr'>{logoStr}</div>
    </div>
    <button className={logoStr === 'Приемы' ? 'button-exit' : 'hide'}>Выход</button>
  </div>
  )
}

export default Header;

