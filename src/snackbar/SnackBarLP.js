import Snackbar from '@mui/material/Snackbar'
import Alert from '@mui/material/Alert';

const SnackBarLP = ({isOpen, setSnackLP}) => {

  const handleClose = () => {
    setSnackLP(false)
  }

  return(
    <>
      <Snackbar
        open={isOpen}
        onClose={handleClose}
        autoHideDuration={3000}
      >
        <Alert severity="error" >Wrong login or password</Alert>
      </Snackbar>
    </>
  )
}

export default SnackBarLP