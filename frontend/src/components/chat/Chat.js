import React from "react";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Typography, Button } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Message from "../global/Message";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';


export default function Chat() {
  const [value, setValue] = React.useState('');

  const handleChange = (event) => {
    setValue(event.target.value);
  };

  return (
    <>
      <BackgroundHeader class={"header-bg-chat"}></BackgroundHeader>
      <Stack className="header-chat" justifyContent="center" alignItems="start" sx={{ paddingLeft: "1em" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ padding: "1em" }}>
          <IconButton sx={{ color: "#000", padding: 0 }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
            <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
          </IconButton>
          <Avatar sx={{ width: 50, height: 50, margin: "0 .5em" }}></Avatar>
          <Stack className="chat-text-item">
            <Typography variant="h5">
              FASTPEAK
            </Typography>
            <Typography variant="body1">
              Status
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="conversation">
        <Stack className="messages-body">
          <Message type="received"></Message>
          <Message type="sent"></Message>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" component="form" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, height: "10%", columnGap: ".2em", padding: ".5em" }} noValidate autoComplete="off">
          <TextField sx={{ '& .MuiInputBase-root': { padding: ".5em", borderRadius: "16px 16px", border: "1px solid gray" }, '& .MuiOutlinedInput-notchedOutline': { display: "none" } }} id="outlined-multiline-flexible" multiline maxRows={2} value={value} onChange={handleChange} />
          <Button color="blue" size="large" sx={{ borderRadius: "40%", padding: ".2em", minWidth: 50, height: 45 }} variant="contained" component="label" >
            <SendRoundedIcon fontSize="medium"></SendRoundedIcon>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}