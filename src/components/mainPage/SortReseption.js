import React, { useState } from 'react';
import { MenuItem, TextField } from '@mui/material';
import plus from '../../Images/Plus.png';
import '../../Style/main-style/sort.css';
import '../../Style/main-style/sort-media.css';

const SortReseption = ({ 
  choiceSort,
  direction,
  reseptions,
  setReseptions,
  showFilter,
  setShowFilter }) => {

  const objText = {
    sortInText: 'Сортировать по:',
    directionText: 'Направление:',
    Ascending: 'asc',
    Descending: 'desc',
    addFilterText: 'Добавить фильтр по дате:'
  }

  const {sortInText, directionText, Ascending, Descending, addFilterText} = objText;

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
      reseptions.sort((a, b) => {
        if (a._id < b._id) {
          return -1;
        }
      });
      setReseptions([...reseptions]);
      setValueSort('None');
    } else {
      sortReseptions(eventSortIn , valueDirection);
      setValueSort(eventSortIn);
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
            {direction.map((item, index)=> <MenuItem key={index} value={item.en}>{item.ru}</MenuItem>)}
          </TextField>
      </div>
      <div className={showFilter ? 'hide' : 'plus-block'}>
        <div>{addFilterText}</div>
        <div className='plus-button'>
          <img onClick={() => setShowFilter(true)} src={plus} alt='add filter'/>
        </div>
      </div>
    </div>  
  )
}

export default SortReseption;