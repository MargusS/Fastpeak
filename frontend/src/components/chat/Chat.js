import React, { useEffect, useMemo, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Typography, Button } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Message from "./Message";

export default function Chat() {

  const localID = localStorage.getItem('user_id')

  const navigate = useNavigate();
  const { id } = useParams();
  const idMemo = useMemo(() => { return id }, [id]);

  const [message, setMessage] = useState({
    content: "",
    chat: id,
  });
  const [chat, setChat] = useState({});

  useEffect(() => {
    axios.get(`/api/chats/${idMemo}`)
      .then(res => setChat(res.data))
  }, [idMemo]);

  useEffect(() => {
    const messagesContainer = document.querySelector(".messages-body");
    if (Object.keys(chat).length !== 0) messagesContainer.scrollTop = messagesContainer.scrollHeight;
  }, [chat]);

  const updateChatData = (data) => {
    console.log(chat);
    setChat({
      ...chat,
      messages: [...chat.messages, { ...data }]
    })
  };

  useEffect(() => {
    const ws = new WebSocket('ws://127.0.0.1:3000/cable')
    ws.onopen = () => {
      ws.send(
        JSON.stringify({
          command: "subscribe",
          identifier: JSON.stringify({
            channel: "ChatChannel",
            id: idMemo
          }),
        })
      );
    }

    ws.onmessage = (e) => {
      const data = JSON.parse(e.data);
      if (Object.keys(chat).length === 0) return
      if (data.type === "ping") return;
      if (data.type === "welcome") return;
      if (data.type === "confirm_subscription") return;

      const message = data.message;
      updateChatData(message);
    };
  }, [idMemo])

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`/api/messages`, { message })
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

      {
        Object.keys(chat).length !== 0 ?
          <>
            <Stack className="header-chat" justifyContent="center" alignItems="start" sx={{ paddingLeft: "1em" }}>
              <Stack direction="row" justifyContent="center" alignItems="center" sx={{ padding: "1em" }}>
                <IconButton sx={{ color: "#000", padding: 0 }} className="logOut-btn" component="label" size="large" onClick={() => navigate('/home')}>
                  <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
                </IconButton>
                <Avatar sx={{ width: 50, height: 50, margin: "0 .5em" }} src={chat.members[0]['avatar_url']} alt="avatar"></Avatar>
                <Stack className="chat-text-item">
                  <Typography variant="h5">
                    {
                      chat.members[0]['username']
                    }
                  </Typography>
                  <Typography variant="body1">
                    {
                      chat.members[0]['status']
                    }
                  </Typography>
                </Stack>
              </Stack>
            </Stack>
            <Stack className="conversation">
              <Stack className="messages-body">
                {
                  Array.from(chat.messages).map((mess, i) => {
                    return (
                      <Message key={mess.id} type={mess.user_id == localID ? "sent" : "received"} content={mess.content}></Message>
                    )
                  })
                }
              </Stack>
              <Stack component="form" onSubmit={handleSubmit} direction="row" justifyContent="center" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, height: "10%", columnGap: ".2em", padding: ".5em" }} noValidate autoComplete="off">
                <TextField sx={{ '& .MuiInputBase-root': { padding: ".5em", borderRadius: "16px 16px", border: "1px solid gray" }, '& .MuiOutlinedInput-notchedOutline': { display: "none" } }} id="outlined-multiline-flexible" multiline maxRows={2} name="content" onChange={handleChange} value={message.content} />
                <Button variant="contained" color="blue" sx={{ borderRadius: "40%", padding: ".2em", minWidth: 50, height: 45 }} size="large" type="submit">
                  <SendRoundedIcon fontSize="medium"></SendRoundedIcon>
                </Button>
              </Stack>
            </Stack>
          </>
          :
          ""
      }
    </>
  )
}