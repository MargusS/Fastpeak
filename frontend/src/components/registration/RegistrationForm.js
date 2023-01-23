import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios';
import { useNavigate } from "react-router-dom";
// import { useTheme } from '@mui/styles';

export default function RegistrationForm() {

  // const theme = useTheme()

  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    password_confirmation: "",
    status: "Online",
    avatar: null
  });

  const handleChangeAvatar = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.files[0]
    })
  }
  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();

    console.log("Called")
    const data = new FormData();

    data.append("user[email]", user.email);
    data.append("user[password]", user.password);
    data.append("user[username]", user.username);
    data.append("user[password_confirmation]", user.password_confirmation);
    data.append("user[status]", user.status);
    data.append("user[avatar]", user.avatar);
    event.preventDefault();
    axios.post(`/api/users`, data)
      .then(res => {
        // console.log(res)
        localStorage.setItem('user_id', res.data.user.id)
        localStorage.setItem('user_avatar', res.data.user.avatar_url)
        navigate('/home')
      })
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{ padding: "0 1em", margin: "1em 0", height: "40vh" }}>
        <Stack>
          <Button variant="outlined" component="label" sx={{ borderRadius: "50%", padding: 0, minWidth: "inherit", width: "10em", height: "10em", overflow: "hidden" }} >
            <Stack justifyContent="center" alignItems="center" sx={{ '& .MuiStack-root': { alignItems: "center" }, rowGap: "1em" }}>
              {
                user.avatar === null ?
                  <>
                    <AddPhotoAlternateIcon fontSize="large" />
                    <Typography variant="subtitle" align="center">
                      Image Profile
                    </Typography>
                  </>
                  :
                  <img className="avatar" src={URL.createObjectURL(user.avatar)} alt="User Avatar"></img>
              }
            </Stack>
            <input name="avatar" hidden accept="image/*" type="file" onChange={handleChangeAvatar} />
          </Button>
        </Stack>
        <Stack spacing={2.5} sx={{ paddingBottom: "1em" }}>
          <FormControl variant="standard" >
            <InputLabel htmlFor="username" >Username</InputLabel>
            <Input id="username" name="username" type="text" onChange={handleChange} value={user.username} required />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" onChange={handleChange} value={user.email} required />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="password" type="password" onChange={handleChange} value={user.password} required />
          </FormControl>
          <FormControl variant="standard">
            <InputLabel htmlFor="password_confirmation">Repeat Password</InputLabel>
            <Input id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} value={user.password_confirmation} required />
          </FormControl>
        </Stack>
      </Stack>
      <Stack>
        <Button sx={{ margin: "0 auto" }} variant="contained" size="large" type="submit">Sign In</Button>
      </Stack>
    </Box>
  )
}