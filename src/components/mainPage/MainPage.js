import Filling from "./Filling";
import Reseptions from "./Reseptions";
import Header from "../Header"

const MainPage = () => {
  const obj = {
    logoStr: 'Приемы',
    logoStrN: 'Receptions'
  };
  
  return (
    <div className="main-page">
      <Header obj={ obj } />
      <div className="main-container">
        <Filling />
      </div>
      <Reseptions />
    </div>
  )
}

export default MainPage;