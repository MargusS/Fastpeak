import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function RegistrationForm() {
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
    const data = new FormData();

    data.append("user[email]", user.email);
    data.append("user[password]", user.password);
    data.append("user[username]", user.username);
    data.append("user[password_confirmation]", user.password_confirmation);
    data.append("user[status]", user.status);
    data.append("user[avatar]", user.avatar);
    console.log(data)
    axios.post(`/api/users`, data)
      .then(res => {
        localStorage.setItem('user_id', res.data.user.id)
        localStorage.setItem('user_avatar', res.data.user.avatar_url)
        navigate('/home')
      })
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{ padding: "0 1em", margin: "1em 0", height: "40vh" }}>
        <Stack>
          <Button variant="outlined" component="label" color="blue" sx={{ borderRadius: "50%", padding: 0, minWidth: "inherit", width: "10em", height: "10em", overflow: "hidden" }} >
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
            <input required name="avatar" hidden accept="image/*" type="file" onChange={handleChangeAvatar} />
          </Button>
        </Stack>
        <Stack spacing={2.5} sx={{ paddingBottom: "1em" }}>
          <FormControl variant="standard" color="blue" >
            <InputLabel htmlFor="username" >Username</InputLabel>
            <Input required minLength="4" maxLength="15" id="username" name="username" type="text" onChange={handleChange} value={user.username} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input required id="email" name="email" type="email" onChange={handleChange} value={user.email} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input required minLength="6" id="password" name="password" type="password" onChange={handleChange} value={user.password} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password_confirmation">Repeat Password</InputLabel>
            <Input required minLength="6" id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} value={user.password_confirmation} />
          </FormControl>
        </Stack>
      </Stack>
      <Stack>
        <Button sx={{ margin: "0 auto" }} variant="contained" color="blue" size="large" type="submit">Sign In</Button>
      </Stack>
    </Box>
  )
}