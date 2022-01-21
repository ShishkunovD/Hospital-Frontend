import React, { useContext, useState } from "react";
import axios from "axios";
import moment from 'moment';
import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
  TextField,
  MenuItem
} from '@mui/material';
import { LocalizationProvider, DatePicker } from '@mui/lab';
import AdapterDateFns from '@mui/lab/AdapterDateFns';
import { AuthContext } from "../context/AuthContext";
import '../Style/main-style/modal.css'

const Modal = ({ openModal, setOpenModal, doctors, elemArray, setInputField, inputField, setReseptions }) => {
  const { name, doctor, date, complaints, _id } = elemArray;
  const auth = useContext(AuthContext);

  const dateF = date.replaceAll('.', '/');
  const arrayDate = dateF.split('/');
  const newDate = `${arrayDate[1]}-${arrayDate[0]}-${arrayDate[2]}`;

  const [inputEdit, setInputEdit] = useState({
    editName: name,
    editDoctor: doctor,
    editDate: newDate,
    editComplaint: complaints
  });

  const { editName, editDoctor, editDate, editComplaint } = inputEdit;

  const modalClose = () => {
    setOpenModal(false);
  }

  const dataHandler = (newValue) => {
    setInputField({ ...inputField, date: newValue });
  }

  const updateReseption = async () => {
    await axios.patch(`http://localhost:8000/api/reseption/updateReseption?id=${_id}`, {
      name: editName,
      doctor: editDoctor,
      date: moment(editDate).format('DD.MM.YYYY'),
      complaints: editComplaint
    },
      {
        headers: {
          Authorization: `Bearer: ${auth.isAuth}`
        }
      }).then(res => {
        setReseptions(res.data.data);
      });
  }


  return (
    <Dialog
      open={openModal}
      onClose={modalClose}
      aria-describedby="alert-dialog-slide-description"
    >
      <DialogTitle>Изменить приём</DialogTitle>
      <DialogContent>
        <div className='modal-container'>
          <TextField
            // className="input-name"
            label="Имя"
            variant="outlined"
            defaultValue={editName}
            // value={editName}
            onChange={(e) => setInputEdit({ ...inputEdit, editName: e.target.value })}
          />
          <TextField
            select
            defaultValue={doctor}
            onChange={(e) => setInputEdit({ ...inputEdit, editDoctor: e.target.value })}
          >
            {doctors.map((item, index) => <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>

          <LocalizationProvider dateAdapter={AdapterDateFns}>
            <DatePicker
              renderInput={(params) => <TextField
                className='input-calendar-modal'
                {...params}
                onChange={(e) => setInputEdit({ ...inputEdit, editDate: e.target.value })}
              />}
              format="dd/MM/yyyy"
              defaultValue={newDate}
              onChange={(e) => setInputEdit({ ...inputEdit, editDate: e })}
            />
          </LocalizationProvider>

          <TextField
            className="input-complaints"
            label="Жалобы"
            variant="outlined"
            defaultValue={complaints}
            onChange={(e) => setInputEdit({ ...inputEdit, editComplaint: e.target.value })}
          />
        </div>
      </DialogContent>
      <DialogActions>
        <Button onClick={modalClose}>Cancel</Button>
        <Button onClick={() => updateReseption()}>Save</Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal;