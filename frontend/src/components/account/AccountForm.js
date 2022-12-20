import React, { useEffect, useRef, useState } from "react";
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
    status: "Online",
    avatar: null,
  });

  const aux = useRef();
  aux.current = user;

  useEffect(() => {
    axios(`/api/users/${localID}`).then(res => {
      setUser({
        ...aux.current,
        ...res.data.user,
      })
    })
  }, [])

  const handleChangeAvatar = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.files[0],
      avatar_url: null
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
    if (user.username !== "") {
      data.append("user[username]", user.username);
    }
    if (user.email !== "") {
      data.append("user[email]", user.email);
    }

    if (user.password !== "" && user.password_confirmation !== "") {
      data.append("user[password]", user.password);
      data.append("user[password_confirmation]", user.password_confirmation);
    }

    data.append("user[status]", user.status);
    if (user.avatar !== null) {
      data.append("user[avatar]", user.avatar);
    }

    axios.put(`/api/users/${localID}`, data)
      .then(res => {
        console.log(res)
        localStorage.setItem('user_avatar', res.data.avatar_url)
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
                user.avatar_url === null && user.avatar === null ?
                  <>
                    <AddPhotoAlternateIcon fontSize="large" />
                    <Typography variant="subtitle" align="center">
                      Image Profile
                    </Typography>
                  </>
                  :
                  user.avatar_url === null ?
                    <img className="avatar" src={URL.createObjectURL(user.avatar)} alt="User Avatar"></img>
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
            <Input minlength="6" id="password" name="password" type="password" onChange={handleChange} value={user.password} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password_confirmation">Repeat New Password</InputLabel>
            <Input minlength="6" id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} value={user.password_confirmation} />
          </FormControl>
        </Stack>
      </Stack>
      <Stack>
        <Button sx={{ margin: "0 auto" }} variant="contained" color="blue" size="large" type="submit">Update</Button>
      </Stack>
    </Box>
  )
}