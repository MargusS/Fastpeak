import React, { useEffect, useState } from "react";
import { FormControl, Input, InputLabel, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function AccountForm() {

  const localID = localStorage.getItem('user_id')
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    password_confirmation: "",
    status: "",
    avatar: null,
  });

  useEffect(() => {
    axios(`/api/users/${localID}`).then(res => {
      setUser(res.data.user)
    })
  }, [])

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
    event.preventDefault();
    axios.post(`/api/users`, data)
      .then(res => {
        console.log(res)
        localStorage.setItem('user_id', res.data.user.id)
        localStorage.setItem('user_avatar', res.data.user.avatar_url)
        navigate('/home')
      })
  };

  return (
    <Box component="form" onSubmit={handleSubmit}>
      {console.log(user)}
      <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{ padding: "0 1em", margin: "1em 0", height: "40vh" }}>
        <Stack>
          <Button variant="outlined" component="label" color="blue" sx={{ borderRadius: "50%", padding: 0, minWidth: "inherit", width: "10em", height: "10em", overflow: "hidden" }} >
            <Stack justifyContent="center" alignItems="center" sx={{ '& .MuiStack-root': { alignItems: "center" }, rowGap: "1em" }}>
              {
                user.avatar_url === null ?
                  <>
                    <AddPhotoAlternateIcon fontSize="large" />
                    <Typography variant="subtitle" align="center">
                      Image Profile
                    </Typography>
                  </>
                  :
                  <img className="avatar" src={user.avatar_url} alt="User Avatar"></img>
              }
            </Stack>
            <input name="avatar" hidden accept="image/*" type="file" onChange={handleChangeAvatar} />
          </Button>
        </Stack>
        <Stack spacing={2.5} sx={{ paddingBottom: "1em" }}>
          <FormControl variant="standard" color="blue" >
            <InputLabel htmlFor="username" >Username</InputLabel>
            <Input id="username" name="username" type="text" onChange={handleChange} value={user.username} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" onChange={handleChange} value={user.email} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password">New Password</InputLabel>
            <Input id="password" name="password" type="password" onChange={handleChange} value={user.password} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password_confirmation">Repeat New Password</InputLabel>
            <Input id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} value={user.password_confirmation} />
          </FormControl>
        </Stack>
      </Stack>
      <Stack>
        <Button sx={{ margin: "0 auto" }} variant="contained" color="blue" size="large" type="submit">Update</Button>
      </Stack>
    </Box>
  )
}