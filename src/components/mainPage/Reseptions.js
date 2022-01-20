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

const Reseptions = ({ reseptions }) => {

  const headerTable = ['Имя', 'Врач', 'Дата', 'Жалобы', ''];

  return (
    <TableContainer>
      <Table className='table-container' >
        <TableHead  className='table-header'>
          <TableRow>
            {headerTable.map((item, index) => <TableCell key={index}>{item}</TableCell>)}
          </TableRow>
        </TableHead>
        <TableBody>
          {reseptions.map((item, index) => <OneReseption key={index} item={item}/>)}
        </TableBody>
      </Table>
    </TableContainer>
  );
}

export default Reseptions;