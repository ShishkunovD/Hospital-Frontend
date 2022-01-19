import React from 'react';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import LocalizationProvider from '@mui/lab/LocalizationProvider';
import DatePicker from '@mui/lab/DatePicker';
import TextField from '@mui/material/TextField';
import MenuItem from '@mui/material/MenuItem';
import '../../Style/main-style/filling.css';
import '../../Style/main-style/filling-media.css';

const Filling = ({ inputName, setInputName, selectDoctor, setSelectDoctor, date, setDate, complaint, setComplaint, addReseption }) => {
  const doctors = ['Аганесов Александр Георгиевич', 'Белов Юрий Владимирович', 'Давыдов Михаил Иванович'];

  const dataHandler = (newValue) => {
    setDate(newValue);
  }

  return (
    <div className="filling">
      <div className="filling-inputs">
        <div className="filling-block-1">
          <TextField 
            style={{marginRight: '5px', width: '265px'}}
            id="input-name"
            label="Имя" 
            variant="outlined"
            value={inputName}
            onChange = {(e) => setInputName(e.target.value)}
          />
          <TextField
            style={{width: '265px'}}
            id="input-doctor"
            select
            label="Врач"
            helperText="Please select your doctor"
            value={selectDoctor}
            onChange = {(e) => setSelectDoctor(e.target.value)}
          >
            {doctors.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>
        </div>
        <div className="filling-block-2">
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              renderInput={(params) => <TextField 
                style={{marginLeft: '5px', width: '265px'}} 
                {...params} 
              />}
              inputFormat="dd/MM/yyyy"
              value={date}
              onChange={dataHandler}
            />
          </LocalizationProvider>
          <TextField 
            style={{marginLeft: '5px', width: '265px'}}
            id="input-complaints"
            label="Жалобы" 
            variant="outlined"
            value={complaint}
            onChange = {(e) => setComplaint(e.target.value)}
          />
        </div>
      </div>
      <button className="add-btn" onClick={() => addReseption()}>Добавить</button>
    </div>
  )
}

export default Filling;