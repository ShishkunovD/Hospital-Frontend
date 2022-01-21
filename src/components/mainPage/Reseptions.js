import React from 'react';
import { 
  Table,
  TableContainer,
  TableHead,
  TableRow,
  TableCell,
  TableBody 
} from '@mui/material';
import OneReseption from './OneReseption';
import '../../Style/main-style/table.css';

const Reseptions = ({ reseptions, elemArray, openModal, setOpenModal, doctors, setInputField, inputField, onModalOpen, setReseptions }) => {

  const headerTable = ['Имя', 'Врач', 'Дата', 'Жалобы', ''];

  // console.log(elemArray);

  return (
    <TableContainer>
      <Table className='table-container' >
        <TableHead  className='table-header'>
          <TableRow>
            {headerTable.map((item, index) => <TableCell key={index}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {reseptions.map((item, index) => <OneReseption 
            key={ index }
            item={ item }
            index={ index }
            elemArray={ elemArray }
            openModal={ openModal }
            setOpenModal={ setOpenModal }
            doctors={ doctors }
            setInputField={setInputField}
            inputField={inputField}
            onModalOpen={onModalOpen}
            setReseptions={setReseptions}
          />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Reseptions;