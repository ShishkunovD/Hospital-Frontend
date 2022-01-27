import React, { useState } from 'react';
import { 
  TableRow,
  TableCell 
} from '@mui/material';
import  Modal  from '../../modal/Modal';
import ModalDelete from '../../modal/Modal.delete';
import Basket from '../../Images/Basket.png';
import Pencel from '../../Images/Pancel.png';
import '../../Style/main-style/modal.css';

const OneReseption = ({ 
  item,
  index,
  elemArray,
  setIndexReseption,
  doctors,
  setInputField,
  inputField,
  setReseptions }) => {
 const { name, doctor, date, complaints } = item;

   // Arrays for Modal window
   const [openModal, setOpenModal] = useState(false);
   const [openModalDelete, setOpenModalDelete] = useState(false);

   const handleModalOpen = (index) => {
    setIndexReseption(index);
    setOpenModal(true);
  }

  const handleModalOpenDelete = (index) => {
    setIndexReseption(index);
    setOpenModalDelete(true);
  }

  return (
    <TableRow className='table-content'>
      <TableCell className='one-cell'>{name}</TableCell>
      <TableCell className='one-cell'>{doctor}</TableCell>
      <TableCell className='one-cell'>{date}</TableCell>
      <TableCell className='one-cell cell-complaints'>{complaints}</TableCell>
      <TableCell className='one-cell delete-edit'>
        <div className='container-delete-edit'>
          <span>
            <img
              className='basket'
              onClick={() => {handleModalOpenDelete(index)}}
              src={Basket}
              alt={Basket}
            />
          </span>
          <span>
            <img 
              className='pancel'
              onClick={() => {handleModalOpen(index)}}
              src={Pencel}
              alt={Pencel}
            />
          </span>
        </div>
      </TableCell>
      {openModal && <Modal 
        openModal={ openModal } 
        setOpenModal={ setOpenModal } 
        doctors={ doctors } 
        elemArray={ elemArray } 
        setInputField={ setInputField } 
        inputField={ inputField }
        setReseptions={ setReseptions }/>
      }
      {openModalDelete && <ModalDelete
        elemArray={ elemArray }
        openModalDelete={ openModalDelete }
        setOpenModalDelete = { setOpenModalDelete }
        setReseptions={setReseptions}/>}
    </TableRow>
  )
}

export default OneReseption;