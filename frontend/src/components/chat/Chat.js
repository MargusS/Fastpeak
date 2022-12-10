import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { FormControl, Input, InputLabel, Avatar, IconButton, Typography, Button, Box } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import Message from "../global/Message";
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';
import axios from "axios";


export default function Chat() {
  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState({
    content: "",
    chat: id,
  });
  const [chat, setChat] = useState({});

  useEffect(() => {
    getChat();
  }, []);

  const getChat = () => {
    axios.get(`http://127.0.0.1:3000/chats/${id}`)
      .then(res => setChat(res.data))
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ message })
    axios.post(`http://127.0.0.1:3000/messages`, { message })
      .then(res => { console.log(res) })
      .catch(err => { console.log(err) })
    setMessage({
      ...message,
      content: ""
    })
  };

  const handleChange = (event) => {
    setMessage({
      ...message,
      [event.target.name]: event.target.value
    })
  };

  return (
    <>
      <BackgroundHeader class={"header-bg-chat"}></BackgroundHeader>
      <Stack className="header-chat" justifyContent="center" alignItems="start" sx={{ paddingLeft: "1em" }}>
        <Stack direction="row" justifyContent="center" alignItems="center" sx={{ padding: "1em" }}>
          <IconButton sx={{ color: "#000", padding: 0 }} className="logOut-btn" aria-label="upload picture" component="label" size="large" onClick={() => navigate('/home')}>
            <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
          </IconButton>
          <Avatar sx={{ width: 50, height: 50, margin: "0 .5em" }}></Avatar>
          <Stack className="chat-text-item">
            <Typography variant="h5">
              {
                Object.keys(chat).length === 0 ? "" : chat.members[0].username
              }
            </Typography>
            <Typography variant="body1">
              {
                Object.keys(chat).length === 0 ? "" : chat.members[0].status
              }
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="conversation">
        <Stack className="messages-body">
          {
            Object.keys(chat).length === 0 ?
              "" :
              Array.from(chat.messages).map((mess, i) => {
                return (
                  <Message key={i} type={mess.type} content={mess.content}></Message>
                )
              })
          }
        </Stack>
        <Box component="form" onSubmit={handleSubmit}>
          <Stack direction="row" justifyContent="center" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, height: "10%", columnGap: ".2em", padding: ".5em" }} noValidate autoComplete="off">
            <TextField sx={{ '& .MuiInputBase-root': { padding: ".5em", borderRadius: "16px 16px", border: "1px solid gray" }, '& .MuiOutlinedInput-notchedOutline': { display: "none" } }} id="outlined-multiline-flexible" multiline maxRows={2} name="content" onChange={handleChange} value={message.content} />
            <Button variant="contained" color="blue" sx={{ borderRadius: "40%", padding: ".2em", minWidth: 50, height: 45 }} size="large" type="submit">
              <SendRoundedIcon fontSize="medium"></SendRoundedIcon>
            </Button>
          </Stack>
        </Box>
      </Stack>
    </>
  )
}