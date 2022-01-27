import React, { useContext, useState } from "react";
import axios from "axios";
import moment from 'moment';
import { LocalizationProvider, DatePicker } from "@mui/lab";
import AdapterDateFns from "@mui/lab/AdapterDateFns";
import { TextField } from "@mui/material";
import { AuthContext } from "../../context/AuthContext";
import basketFilter from '../../Images/Basket-filter.png'
import '../../Style/main-style/filter.css';
import '../../Style/main-style/filter-media.css';

const FilterReseptions = ({
  setShowFilter,
  setReseptions,
  reseptionsFilter }) => {

  const auth = useContext(AuthContext);

  const [minDateState, setMinDateState] = useState('');
  const [maxDateState, setMaxDateState] = useState('');

  const dateFormatMin = moment(minDateState).format('DD.MM.YYYY');
  const dateFormatMax = moment(maxDateState).format('DD.MM.YYYY');

  const filterReseptions = () => {
    const arrayMin = dateFormatMin.split('.').reverse();
    const arrayMax = dateFormatMax.split('.').reverse();
    const resultReseptions = reseptionsFilter.filter(item => {
      const ourDate = item.date.split('.').reverse().join('');
      if (moment(minDateState).isValid() && moment(maxDateState).isValid()) {
        return ourDate >= arrayMin.join('') && ourDate <= arrayMax.join('');
      } else if (moment(minDateState).isValid()) {
        return ourDate >= arrayMin.join('');
      } else if (moment(maxDateState).isValid()) {
        return (ourDate <= arrayMax.join(''));
      }
    });
    setReseptions(resultReseptions);
  }

  const closeFilter = async () => {
    await axios.get('http://localhost:8000/api/reseption/getAllReseption', {
      headers: {
        Authorization: `Bearer ${auth.isAuth}`
      }
    }).then(res => {
      setReseptions(res.data.data);
    });
    setShowFilter(false);
  }

  return (
    <div className='filter-block'>
      <div className='calendar-block'>
        <div className='first-calendar-block'>
          <div className='calendar-title'>C:</div>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              renderInput={(params) => <TextField
                {...params}
              />}
              inputFormat="dd/MM/yyyy"
              value={minDateState}
              onChange={(newValue) => setMinDateState(newValue)}
            />
          </LocalizationProvider>
        </div>
        <div className='second-calendar-block'>
          <div className='calendar-title'>По:</div>
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              renderInput={(params) => <TextField
                {...params}
              />}
              inputFormat="dd/MM/yyyy"
              value={maxDateState}
              onChange={(newValue) => setMaxDateState(newValue)}
            />
          </LocalizationProvider>
        </div>
      </div>
      <div className='btn-block'>
        <button className='btn-filter' onClick={() => filterReseptions()}>Фильтровать</button>
        <img className='delete-filter' onClick={() => closeFilter()} src={basketFilter} alt='delete filter'/>
      </div>
    </div>
  )
}

export default FilterReseptions;