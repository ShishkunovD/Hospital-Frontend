import React from 'react';
import { 
  TableRow,
  TableCell 
} from '@mui/material';
import Basket from '../../Images/Basket.png';
import Pancel from '../../Images/Pancel.png';

const OneReseption = ({ item }) => {

 const {name, doctor, date, complaints} = item;

  return(
    <TableRow className='table-content'>
      <TableCell className='oneCell'>{name}</TableCell>
      <TableCell className='oneCell'>{doctor}</TableCell>
      <TableCell className='oneCell'>{date}</TableCell>
      <TableCell className='oneCell'>{complaints}</TableCell>
      <TableCell className='oneCell delete-edit'>
        <div className='container-delete-edit'>
          <span>
            <img 
              src={Basket}
            />
          </span>
          <span>
            <img 
              src={Pancel}
            />
          </span>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default OneReseption;