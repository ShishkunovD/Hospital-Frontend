import React, { useState } from 'react';
import Header from "../Header"
import Filling from "./Filling";
import Reseptions from "./Reseptions";

const MainPage = () => {
  const obj = {
    logoStr: 'Приемы',
    logoStrN: 'Receptions'
  };

  // Array with our reseptions 
  const [reseptions, setReseptions] = useState([]);
  
  return (
    <div className="main-page">
      <Header obj={ obj } />
      <div className="main-container">
        <Filling 
          reseptions={ reseptions }
          setReseptions={setReseptions}
        />
      </div>
      <div className='reseptions'>
        <Reseptions reseptions={ reseptions }/>
      </div>
    </div>
  )
}

export default MainPage;