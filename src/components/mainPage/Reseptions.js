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
import '../../Style/main-style/table-media.css';

const Reseptions = ({ 
  reseptions,
  elemArray,
  setIndexReseption,
  doctors,
  setInputField,
  inputField,
  setReseptions }) => {

  const headerTable = ['Имя', 'Врач', 'Дата', 'Жалобы', ''];

  return (
    <TableContainer className='table-container'>
      <Table >
        <TableHead  className='table-header'>
          <TableRow>
            {headerTable.map((item, index) => <TableCell 
              className='table-cell-header' 
              key={index}>{item}
            </TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {reseptions.map((item, index) => <OneReseption 
            key={ index }
            item={ item }
            index={ index }
            elemArray={ elemArray }
            setIndexReseption={setIndexReseption}
            doctors={ doctors }
            setInputField={ setInputField }
            inputField={ inputField }
            setReseptions={ setReseptions }
          />)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Reseptions;