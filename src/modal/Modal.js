import { Dialog, DialogTitle } from "@mui/material"

const Modal = () => {

  const objDialog = {
    title: 'Изменить приём',
  }

  const { title } = objDialog; 

  return(
    <>
      <Dialog 
        open={open}
        onClose={modalClose}
        aria-labelledby="Change-reseption-title"
      >
        <DialogTitle>{title}</DialogTitle>
      </Dialog>
    </>
  )
}

export default Modal;