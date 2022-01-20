import { Dialog, DialogTitle } from "@mui/material"

const Modal = () => {

  return(
    <>
      <Dialog 
        open={open}
        onClose={modalClose}
        aria-labelledby="Change-reseption-title"
      >
        <DialogTitle>Изменить приём</DialogTitle>
      </Dialog>
    </>
  )
}

export default Modal;