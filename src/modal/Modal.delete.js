import React, { useContext } from "react";
import axios from 'axios';
import { 
  Button,
  Dialog,
  DialogContent,
  DialogActions,
  DialogTitle,
  Typography } from "@mui/material";
import { AuthContext } from "../context/AuthContext";

const ModalDelete = ({ 
  elemArray,
  openModalDelete,
  setOpenModalDelete,
  setReseptions
}) => {

  const auth = useContext(AuthContext)
  const {_id} = elemArray;

  const deleteReseption = async () => {
    await axios.delete(`http://localhost:8000/api/reseption/deleteReseption?id=${_id}`, { 
      headers: {
        Authorization: `Bearer ${auth.isAuth}`
      }
    }).then(res => {
      setReseptions(res.data.data);
      setOpenModalDelete(false);
    })
  }

  const modalCloseDelete = () => {
    setOpenModalDelete(false);
  }
    
  return (
      <Dialog
        open={openModalDelete}
        onClose={modalCloseDelete}
      >
        <DialogTitle>Удалить приём</DialogTitle>
        <DialogContent>
          <Typography>
            Вы действительно хотите удалить приём?
          </Typography>
        </DialogContent>
        <DialogActions>
          <Button onClick={() => modalCloseDelete()}>Cancel</Button>
          <Button onClick={() => deleteReseption()}>Delete</Button>
        </DialogActions>
      </Dialog>
  )
}

export default ModalDelete;