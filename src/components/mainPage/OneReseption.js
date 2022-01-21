import React from 'react';
import { 
  TableRow,
  TableCell 
} from '@mui/material';
import  Modal  from '../../modal/Modal';
import Basket from '../../Images/Basket.png';
import Pencel from '../../Images/Pancel.png';

const OneReseption = ({ item, index, elemArray, openModal, setOpenModal, doctors, setInputField, inputField, onModalOpen, setReseptions }) => {
 const { name, doctor, date, complaints } = item;

//  const modalOpen = () => {
//   setIndexReseption(index);
//   setOpenModal(true);
// }
  
  // console.log(elemArray);

  return (
    <TableRow className='table-content'>
      <TableCell className='one-cell'>{name}</TableCell>
      <TableCell className='one-cell'>{doctor}</TableCell>
      <TableCell className='one-cell'>{date}</TableCell>
      <TableCell className='one-cell'>{complaints}</TableCell>
      <TableCell className='one-cell delete-edit'>
        <div className='container-delete-edit'>
          <span>
            <img 
              src={Basket}
              alt={Basket}
            />
          </span>
          <span>
            <img 
              onClick={() => {onModalOpen(index)}}
              src={Pencel}
              alt={Pencel}
            />
          </span>
        </div>
      </TableCell>
      {openModal && <Modal 
        openModal={openModal} 
        setOpenModal={setOpenModal} 
        doctors={doctors} 
        elemArray={elemArray} 
        setInputField={setInputField} 
        inputField={inputField}
        setReseptions={setReseptions}/>
      }
    </TableRow>
  )
}

export default OneReseption;