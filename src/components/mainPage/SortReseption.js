import React, { useContext, useState } from 'react';
import axios from 'axios';
import { MenuItem, TextField } from '@mui/material';
import { AuthContext } from '../../context/AuthContext';
import '../../Style/main-style/sort.css';
import '../../Style/main-style/sort-media.css';

const SortReseption = ({ 
  choiceSort,
  direction,
  reseptions,
  setReseptions }) => {

  const objText = {
    sortInText: 'Сортировать по:',
    directionText: 'Направление:',
    Ascending: 'По возрастанию',
    Descending: 'По убыванию'
  }

  const {sortInText, directionText, Ascending, Descending} = objText;
  const auth = useContext(AuthContext);

  //Hook for value sort
  const [valueSort, setValueSort] = useState('');

  //Hook for value direction
  const [valueDirection, setValueDirection] = useState(Ascending);

  const sortReseptions = (valueTarget, directionTarget) => {
    reseptions.sort((a, b) => {
      if (a[valueTarget] < b[valueTarget]) {
        return -1;
      }
    });
    if (directionTarget === Descending) {
      reseptions.reverse();
    }
    setReseptions([...reseptions]);
  }

  const checkSelectValue = async (e) => {
    const eventSortIn = e.target.value;
    if (eventSortIn  === 'None') {
      await axios.get('http://localhost:8000/api/reseption/getAllReseption', {
        headers: {
          Authorization: `Bearer ${auth.isAuth}`
        }
      }).then(res => {
        setReseptions(res.data.data);
        setValueSort('None');
      });
    } else {
      sortReseptions(eventSortIn , valueDirection);
      setValueSort(eventSortIn );
    }
  }

  const checkSelectDirection = (e) => {
    const eventDirection = e.target.value;
    setValueDirection(eventDirection);
    sortReseptions(valueSort, eventDirection);
  }

  return(
    <div className='main-sort-block'>
      <div className='sort-in-block'>
          <div className="sort-in-title">{sortInText}</div>
          <TextField
            className='sort-select'
            select
            value={valueSort}
            onChange={(e) => checkSelectValue(e)}
          >
            {choiceSort.map((item, index) => <MenuItem key={index} value={item.en}>{item.ru}</MenuItem>)}
          </TextField>
      </div>
      <div className={valueSort === '' || valueSort === 'None' ? 'hide' : 'direction-block'}>
          <div className="direction-title">{directionText}</div>
          <TextField
            className='direction-select'
            select
            value={valueDirection}
            onChange={(e) => checkSelectDirection(e)}
          >
            {direction.map((item, index)=> <MenuItem key={index} value={item}>{item}</MenuItem>)}
          </TextField>
      </div>
    </div>  
  )
}

export default SortReseption;