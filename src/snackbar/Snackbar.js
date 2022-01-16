import {Alert, Snackbar } from '@mui/material';

const Snack = ({ isOpen, onSetIsSnackOpen, textSnackbar }) => {

  const handleClose = () => {
    onSetIsSnackOpen(false);
  }

  return(
    <Snackbar
      open={isOpen}
      onClose={handleClose}
      autoHideDuration={3000}
    >
      <Alert severity="error">{textSnackbar}</Alert>
    </Snackbar>
  )
}

export default Snack;