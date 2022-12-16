import React, { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Typography, Button } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';
import SendRoundedIcon from '@mui/icons-material/SendRounded';
import TextField from '@mui/material/TextField';
import axios from "axios";
import Message from "../global/Message";
import { createConsumer } from "@rails/actioncable"

export default function Chat() {

  const navigate = useNavigate();
  const { id } = useParams();

  const [message, setMessage] = useState({
    content: "",
    chat: id,
  });
  const [chat, setChat] = useState({});
  const [cable, setCable] = useState(null);

  // useEffect(() => {
  //   getChat();
  //   if (cable) {
  //     cable.subscriptions.create({ channel: 'ChatChannel' }, {
  //       received: data => {
  //         // Handle incoming message data
  //         dispatch(receivedMessage(data));
  //       }
  //     });
  //   }
  //   // mountCable();
  // }, [cable, dispatch]);

  useEffect(() => {
    getChat();
    if (!cable) {
      const cable = createConsumer('http://127.0.0.1:3000/cable');
      setCable(cable);
    }
  }, []);

  useEffect(() => {
    if (cable) {
      const subscription = cable.subscriptions.create(
        { channel: "ChatChannel" }, {
        received: data => {
          // setChat({ ...chat, data })
          console.log(data)
        }
      });
      return () => {
        subscription.unsubscribe();
      }
    }
  }, [cable]);

  const getChat = () => {
    axios.get(`/api/chats/${id}`)
      .then(res => setChat(res.data))
  }

  const mountCable = () => {
    cable.subscriptions.create(
      { channel: "ChatChannel", id: id })
  }

  const handleSubmit = event => {
    event.preventDefault();
    console.log({ message })
    axios.post(`/api/messages`, { message })
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
          <IconButton sx={{ color: "#000", padding: 0 }} className="logOut-btn" component="label" size="large" onClick={() => navigate('/home')}>
            <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
          </IconButton>
          <Avatar sx={{ width: 50, height: 50, margin: "0 .5em" }}></Avatar>
          <Stack className="chat-text-item">
            <Typography variant="h5">
              {
                Object.keys(chat).length === 0 ? "user" : chat.members[0]['username']
              }
            </Typography>
            <Typography variant="body1">
              {
                Object.keys(chat).length === 0 ? "" : chat.members[0]['status']
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
        <Stack component="form" onSubmit={handleSubmit} direction="row" justifyContent="center" alignItems="center" sx={{ '& .MuiTextField-root': { m: 1, width: '80%' }, height: "10%", columnGap: ".2em", padding: ".5em" }} noValidate autoComplete="off">
          <TextField sx={{ '& .MuiInputBase-root': { padding: ".5em", borderRadius: "16px 16px", border: "1px solid gray" }, '& .MuiOutlinedInput-notchedOutline': { display: "none" } }} id="outlined-multiline-flexible" multiline maxRows={2} name="content" onChange={handleChange} value={message.content} />
          <Button variant="contained" color="blue" sx={{ borderRadius: "40%", padding: ".2em", minWidth: 50, height: 45 }} size="large" type="submit">
            <SendRoundedIcon fontSize="medium"></SendRoundedIcon>
          </Button>
        </Stack>
      </Stack>
    </>
  )
}