import React, { useState } from "react";
import { IconButton, Typography, Stack, Popover } from "@mui/material";
import { Button } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { blueGrey } from "@mui/material/colors";
import Dialog from '@mui/material/Dialog';
import DialogActions from '@mui/material/DialogActions';
import DialogContent from '@mui/material/DialogContent';
import DialogContentText from '@mui/material/DialogContentText';
import DialogTitle from '@mui/material/DialogTitle';

export default function ChatOption({ chatID, chatDelete }) {
  const [options, setOptions] = useState(null)
  const [visible, setVisible] = useState(false)


  const handleOptionsClick = (event) => {
    event.stopPropagation();
    setOptions(event.currentTarget);
  }

  const handleClosePopover = (event) => {
    event.stopPropagation();
    setOptions(null);
  };

  const handleCloseDialog = (event) => {
    event.stopPropagation();
    setVisible(!visible);
    if (event.target.name === "confirm") {
      chatDelete(chatID)
    }

  };

  const onDelete = (event) => {
    event.stopPropagation();
    setVisible(!visible);
    setOptions(null);
  }

  const open = Boolean(options);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Stack>
        <IconButton sx={{ padding: 0 }} className="logOut-btn" aria-describedby={id} variant="contained" onClick={handleOptionsClick} component="label" size="large">
          <SettingsOutlinedIcon></SettingsOutlinedIcon>
        </IconButton>
        <Popover id={id} open={open} anchorEl={options} onClose={handleClosePopover} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
          <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ backgroundColor: "#272E4F", minWidth: "4em" }} >
            <Button onClick={onDelete} sx={{ p: "1em" }} size="large" startIcon={<DeleteIcon sx={{ color: blueGrey[500] }} />}>
              <Typography sx={{ color: "#fff" }} variant="subtitle2">
                DELETE
              </Typography>
            </Button>
          </Stack>
        </Popover>
      </Stack>
      <Dialog
        open={visible}
        onClose={handleCloseDialog}
        aria-labelledby="alert-dialog-title"
        aria-describedby="alert-dialog-description"
      >
        <DialogTitle id="alert-dialog-title">
          {"Delete this chat?"}
        </DialogTitle>
        <DialogContent>
          <DialogContentText id="alert-dialog-description">
            If you want to delete the chat, tap on CONFIRM, else tap on CANCEL.
          </DialogContentText>
        </DialogContent>
        <DialogActions>
          <Button name="cancel" onClick={handleCloseDialog}>CANCEL</Button>
          <Button name="confirm" onClick={handleCloseDialog} autoFocus>
            CONFIRM
          </Button>
        </DialogActions>
      </Dialog>
    </div >
  )
}