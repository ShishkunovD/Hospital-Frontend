import {Alert, Snackbar } from '@mui/material';

const Snack = ({isOpen, isOpenLP, onSetIsSnackOpen, setSnackLP}) => {

  const enterData = 'The entered data is not correct';
  const wrongLP = 'Wrong login or password';

  const handleClose = () => {
    onSetIsSnackOpen(false);
  }

  const handleCloseLP = () => {
    setSnackLP(false);
  }

  return(
    <>
    {isOpen && 
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert severity="error">{enterData}</Alert>
      </Snackbar>
      }

      {isOpenLP &&
        <Snackbar
          open={isOpen}
          onClose={handleCloseLP}
          autoHideDuration={3000}
        >
          <Alert severity="error" >{wrongLP}</Alert>
        </Snackbar>
      }
    </>
  )
}

export default Snack;