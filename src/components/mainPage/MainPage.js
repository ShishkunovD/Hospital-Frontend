import React, { useState, useContext, useEffect } from 'react';
import moment from 'moment';
import Header from "../Header"
import Filling from "./Filling";
import Reseptions from "./Reseptions";
import { AuthContext } from '../../context/AuthContext';

const MainPage = () => {
  const obj = {
    logoStr: 'Приемы',
    logoStrN: 'Receptions'
  };

  const auth = useContext(AuthContext);
  const dateNow = new Date();

  // It's our inputs for enter data
  const [inputName, setInputName] = useState('');
  const [selectDoctor, setSelectDoctor] = useState('');
  const [date, setDate] = useState(dateNow);
  const [complaint, setComplaint] = useState('');

  // Array with our reseptions 
  const [reseptions, setReseptions] = useState([]);

  const dateFormat = moment(date).format('DD.MM.YYYY');

  useEffect(() => {
    const getAllReseption = async () => {
      const resp = await fetch ('http://localhost:8000/api/reseption/getAllReseption', {
        method: 'GET',
        headers: {
          Authorization: `Bearer ${auth.isAuth}`
        }
      });
    const result = await resp.json();
    setReseptions(result.data);
    }
    getAllReseption();
  }, [])


  const addReseption = async () => {
    const resp = await fetch ('http://localhost:8000/api/reseption/createReseption', {
      method: 'POST',
      headers: {
        'Content-type' : 'application/json;charset=utf-8',
        'Access-Control-Allow-Origin' : '*',
        Authorization: `Bearer ${auth.isAuth}`
      },
      body: JSON.stringify({
        name: inputName.trim(),
        doctor: selectDoctor,
        date: dateFormat,
        complaints: complaint.trim()
      })
    });
    const result = await resp.json();
    setInputName('');
    setSelectDoctor('');
    setComplaint('');
    reseptions.push(result.data);
    setReseptions([...reseptions]);
  }
  
  return (
    <div className="main-page">
      <Header obj={ obj } />
      <div className="main-container">
        <Filling 
          inputName={inputName}
          setInputName={setInputName}
          selectDoctor={selectDoctor}
          setSelectDoctor={setSelectDoctor}
          addReseption={addReseption}
          date={date}
          setDate={setDate}
          complaint={complaint}
          setComplaint={setComplaint}
          addReseption={addReseption}
          reseptions={reseptions}
        />
      </div>
      <Reseptions reseptions={reseptions}/>
    </div>
  )
}

export default MainPage;