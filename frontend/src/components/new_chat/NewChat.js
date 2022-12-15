import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Typography, Button } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';
import axios from "axios";

export default function NewChat() {
  const navigate = useNavigate();
  const { id } = useParams();

  useEffect(() => {
    getUser();
  }, [])

  const [chat, setChat] = useState({
    name: "test client",
    user: id,
    message: ""
  });
  const [user, setUser] = useState({
    name: "",
    status: "",
  });

  const getUser = () => {
    axios(`/api/users/${id}`)
      .then(res => {
        setUser({
          ...user, name: res.data.username, status: res.data.status
        })
      })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log(chat)
    axios.post(`/api/chats`, { chat })
      .then(res => { navigate(`/chat/${res.data.id}`) })
      .catch(err => { console.log(err) })
    setChat({
      ...chat,
      message: ""
    })
  };

  const handleChange = (event) => {
    setChat({
      ...chat,
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
                user.name
              }
            </Typography>
            <Typography variant="body1">
              {
                user.status
              }
            </Typography>
          </Stack>
        </Stack>
      </Stack>
      <Stack className="conversation">
        <Stack className="messages-body">
        </Stack>
        <Stack component="form" onSubmit={handleSubmit} direction="row" justifyContent="center" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, height: "10%", columnGap: ".2em", padding: ".5em" }} noValidate autoComplete="off">
          <TextField sx={{ '& .MuiInputBase-root': { padding: ".5em", borderRadius: "16px 16px", border: "1px solid gray" }, '& .MuiOutlinedInput-notchedOutline': { display: "none" } }} id="outlined-multiline-flexible" multiline maxRows={2} name="message" onChange={handleChange} value={chat.message} />
          <Button variant="contained" color="blue" sx={{ borderRadius: "40%", padding: ".2em", minWidth: 50, height: 45 }} size="large" type="submit">
            <SendRoundedIcon fontSize="medium"></SendRoundedIcon>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}