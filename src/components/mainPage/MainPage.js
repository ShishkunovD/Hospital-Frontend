import React, { useState } from 'react';
import Header from "../Header"
import Filling from "./Filling";
import Reseptions from "./Reseptions";
import SortReseption from "./SortReseption";
import FilterReseptions from './FilterReseptions';

const MainPage = () => {
  const obj = {
    logoStr: 'Приемы',
    logoStrN: 'Receptions'
  };

  const doctors = [
    'Аганесов Александр Георгиевич', 
    'Белов Юрий Владимирович', 
    'Давыдов Михаил Иванович'
  ];

  const choiceSort = [
    {
      ru: 'Имя',
      en: 'name'
    },
    {
      ru: 'Врач',
      en: 'doctor'
    },
    {
      ru: 'Дата',
      en: 'date'
    },
    {
      ru: 'None',
      en: 'None'
    }
  ];

  const direction = [
    {
      ru: 'По возрастанию',
      en: 'asc'
    },
    {
      ru: 'По убыванию',
      en: 'desc'
    }
  ];

  const dateNow = new Date();

  const [inputField, setInputField] = useState({
    inputName: '',
    selectDoctor: '',
    date: dateNow,
    complaint: ''
  });

  // Array with our reseptions 
  const [reseptions, setReseptions] = useState([]);

  // Array for working with filtration our reseptions
  const [reseptionsFilter, setReseptionsFilter] = useState([]);

  // Array for get chosen reseption
  const [indexReseption, setIndexReseption] = useState('');

  // state for open our filer component
  const [showFilter, setShowFilter] = useState(false);

  return (
    <div className={showFilter ? "main-page-filter" : "main-page"}>
      <Header obj={obj} />
      <div className="main-container">
        <Filling 
          reseptions={reseptions}
          setReseptions={setReseptions}
          doctors={doctors}
          inputField={inputField}
          setInputField={setInputField}
          setReseptionsFilter={setReseptionsFilter}
        />
      </div>
      <div>
        <SortReseption 
          choiceSort={choiceSort}
          direction={direction}
          reseptions={reseptions}
          setReseptions={setReseptions}
          showFilter={showFilter}
          setShowFilter={setShowFilter}
        />
      </div>
      {showFilter && <FilterReseptions 
        setShowFilter={setShowFilter}
        setReseptions={setReseptions}
        reseptionsFilter={reseptionsFilter}
      />}
      <Reseptions 
        reseptions={reseptions} 
        elemArray={reseptions[indexReseption]}
        setIndexReseption={setIndexReseption}
        doctors={doctors}
        setInputField={setInputField}
        inputField={inputField}
        setReseptions={setReseptions}
      />
    </div>
  )
}

export default MainPage;