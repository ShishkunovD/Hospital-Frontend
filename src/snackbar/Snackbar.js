import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';

const Snack = ({isOpen, onSetIsSnackOpen}) => {

  const handleClose = () => {
    onSetIsSnackOpen(false);
  }

  return(
    <>
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert severity="error">The entered data is not correct</Alert>
      </Snackbar>
    </>
  )
}

export default Snack;