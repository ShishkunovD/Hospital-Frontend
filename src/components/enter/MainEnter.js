import Form from './Form';
import '../../Style/enter-style/mainEnter.css';
import '../../Style/enter-style/mainEnter-media.css';
import MainImg from '../../Images/Main.png';


const MainEnter = ({ obj }) => {
  return (
    <div className='main-enter'>
      <img 
        src={MainImg} 
        alt='mainLogo' 
        className='photo-enter'
      />
      <Form obj={ obj }/>
    </div>
  )
}

export default MainEnter;