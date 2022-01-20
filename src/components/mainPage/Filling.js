import 
  React, {
  useState,
  useContext,
  useEffect
} from 'react';
import axios from 'axios';
import moment from 'moment';
import { TextField, MenuItem } from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AuthContext } from '../../context/AuthContext';
import '../../Style/main-style/filling.css';
import '../../Style/main-style/filling-media.css';

const Filling = ({
  reseptions,
  setReseptions
}) => {

  const doctors = [
    'Аганесов Александр Георгиевич', 
    'Белов Юрий Владимирович', 
    'Давыдов Михаил Иванович'
  ];

  const dateNow = new Date();

  const [inputField, setInputField] = useState({
    inutName: '',
    selectDoctor: '',
    date: dateNow,
    complaint: ''
  })

  const { inputName, selectDoctor, date, complaint } = inputField;

  const dateFormat = moment(date).format('DD.MM.YYYY');
  const auth = useContext(AuthContext);

  const dataHandler = (newValue) => {
    setInputField({...inputField, date: newValue});
  }

  useEffect(() => {
    axios.get('http://localhost:8000/api/reseption/getAllReseption', {
      headers: {
        Authorization: `Bearer ${auth.isAuth}`
      }
    }).then(res => {
      setReseptions(res.data.data);
    });
  }, [])

  const addReseption = async () => {
    await axios.post('http://localhost:8000/api/reseption/createReseption', {
      headers: {
        Authorization: `Bearer ${auth.isAuth}`
      }
    },
    {
      name: inputName.trim(),
      doctor: selectDoctor,
      date: dateFormat,
      complaints: complaint.trim()
    }).then(res => {
      setInputField({...inputField, inputName: '', selectDoctor: '', complaint: ''});
      reseptions.push(res.data.data);
      setReseptions([...reseptions]);
    });
  }

  return (
    <div className="filling">
      <div className="filling-inputs">
        <div className="name-doctor-block">
          <TextField 
            className="input-name"
            label="Имя"
            type="text"
            variant="outlined"
            value={inputName}
            onChange = {(e) => setInputField({...inputField, inputName: e.target.value})}
          />
          <div className="input-doctor-container">
            <TextField
              className="input-doctor"
              select
              label="Врач"
              helperText="Please select your doctor"
              defaultValue={selectDoctor}
              onChange = {(e) => setInputField({...inputField, selectDoctor: e.target.value})}
            >
              {doctors.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
            </TextField>
          </div>
        </div>
        <div className="calendar-complaints-block">
          <LocalizationProvider dateAdapter={AdapterDateFns} >
            <DatePicker
              
              renderInput={(params) => <TextField 
                className='input-calendar'
                {...params} 
              />}
              inputFormat="dd/MM/yyyy"
              defaultValue={date}
              onChange={dataHandler}
            />
          </LocalizationProvider>
          <div className="input-complaints-container">
            <TextField
              className="input-complaints"
              label="Жалобы" 
              variant="outlined"
              defaultValue={complaint}
              onChange = {(e) => setInputField({...inputField, complaint: e.target.value})}
            />
          </div>
        </div>
      </div>
      <button className="add-btn" onClick={() => addReseption()}>Добавить</button>
    </div>
  )
}

export default Filling;