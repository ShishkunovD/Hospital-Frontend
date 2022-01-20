import React from 'react';
import {Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen, onSetIsSnackOpen, messageSnack }) => {

  const handleClose = () => {
    onSetIsSnackOpen(false);
  }

  return(
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert severity="error">{messageSnack}</Alert>
    </Snackbar>
  )
}

export default Snack;