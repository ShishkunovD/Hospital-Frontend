import MainImg from '../../Images/Main.png'
import Form from './Form';

const MainEnter = ({titleStr, enterStr, enterJump}) => {
  return(
    <div className='main-enter'>
      <img src={MainImg} alt='mainLogo' className='photo-enter'/>
      <Form titleStr={titleStr} enterStr={enterStr} enterJump={enterJump}/>
    </div>
  )
}

export default MainEnter;