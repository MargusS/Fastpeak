import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom"
import BackgroundHeader from "../global/BackgroundHeader";
import { FormControl, Input, InputLabel, Button, Typography, IconButton, Card, CardActions, CardContent, Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import CopyrightIcon from '@mui/icons-material/Copyright';
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import PersonSearchIcon from '@mui/icons-material/PersonSearch';
import AddCircleIcon from '@mui/icons-material/AddCircle';
import axios from "axios";

export default function NewContactView() {

  const navigate = useNavigate();
  const localAvatar = localStorage.getItem('user_avatar');

  const [user, setUser] = useState({
    email: ""
  })
  const [contact, setContact] = useState(null)

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleClickSearch = event => {
    event.preventDefault();
    axios.get('/api/show_by_email', { params: { user } })
      .then(res => {
        setContact(res.data.user[0])
      })
      .catch(setContact(null))
  }

  const handleClickAdd = event => {
    axios.post('/api/contacts', { contact })
      .then(navigate('/home'))
    // .catch(err => /*console.log(err)*/)
  }

  return (
    <Stack>
      <BackgroundHeader class={"login-bg"}></BackgroundHeader>
      <Stack className="login-logo">
        <IconButton color="blue" sx={{ padding: 0, position: "fixed", left: "10vw", top: "8vh" }} className="logOut-btn" component="label" size="large" onClick={() => navigate('/home')}>
          <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
        </IconButton>
        <Typography sx={{ position: "fixed", left: "65vw", top: "8vh" }} className="logo-name" variant="h5">
          FASTPEAK
        </Typography>
      </Stack>
      <Stack sx={{ width: "100%", position: "absolute", bottom: "50%" }}>
        <Stack alignItems="center" spacing={3}>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" onChange={handleChange} value={user.email} />
          </FormControl>
          <Button className="logIn-btn" variant="contained" color="blue" type="submit" onClick={handleClickSearch}>
            Search
            <PersonSearchIcon sx={{ marginLeft: 2 }}></PersonSearchIcon>
          </Button>
        </Stack>
      </Stack>
      {
        contact ?
          <Stack sx={{ width: "100%", position: "absolute", top: "55%" }}>
            <Card sx={{ width: "80%", display: "flex", alignItems: "center", margin: "0 auto" }}>
              <CardContent sx={{ padding: 1 }}>
                <IconButton sx={{ color: "#fff" }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                  <Avatar sx={{ width: 50, height: 50 }} src={contact.avatar_url} ></Avatar>
                </IconButton>
              </CardContent >
              <CardContent sx={{ width: "65%", padding: 0 }}>
                <Typography variant="h6" color="text.secondary">
                  {contact.username}
                </Typography>
              </CardContent>
              <CardActions>
                <Button color="blue" onClick={handleClickAdd}>
                  <AddCircleIcon></AddCircleIcon>
                </Button>
              </CardActions>
            </Card>
          </Stack>
          : ""
      }

      <Stack className="footer" direction="row" justifyContent="center" alignItems="center">
        <Typography className="logo-name" variant="body1" gutterBottom>
          FASTPEAK
        </Typography>
        <Typography className="policies" variant="body1" gutterBottom>
          All Rights Reserved
        </Typography>
        <CopyrightIcon></CopyrightIcon>
      </Stack>
    </Stack>
  )
}