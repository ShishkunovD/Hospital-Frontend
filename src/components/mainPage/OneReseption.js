import React from 'react';
import { 
  TableRow,
  TableCell 
} from '@mui/material';
import Basket from '../../Images/Basket.png';
import Pencel from '../../Images/Pancel.png';

const OneReseption = ({ item }) => {
 const { name, doctor, date, complaints } = item;

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
              src={Pencel}
              alt={Pencel}
            />
          </span>
        </div>
      </TableCell>
    </TableRow>
  )
}

export default OneReseption;