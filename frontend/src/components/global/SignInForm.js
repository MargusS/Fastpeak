import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button, Box } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function SignInForm() {
  const navigate = useNavigate()
  const [user, setUser] = useState({
    email: "",
    password: "",
    username: "",
    password_confirmation: "",
    status: "active"
  });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`/api/users`, { user })
      .then(navigate('/home'))
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack direction="row" justifyContent="center" alignItems="center" spacing={4} sx={{ padding: "0 1em", margin: "1em 0", height: "40vh" }}>
          <Stack>
            <Button variant="outlined" component="label" color="blue" sx={{ borderRadius: "50%", padding: "2em", minWidth: "inherit", width: "10em", height: "10em" }} >
              <Stack justifyContent="center" alignItems="center" sx={{ '& .MuiStack-root': { alignItems: "center" }, rowGap: "1em" }}>
                <AddPhotoAlternateIcon fontSize="large" />
                <Typography variant="subtitle" align="center">
                  Image Profile
                </Typography>
              </Stack>
              <input hidden accept="image/*" multiple type="file" />
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
              <InputLabel htmlFor="password">Password</InputLabel>
              <Input id="password" name="password" type="password" onChange={handleChange} value={user.password} />
            </FormControl>
            <FormControl variant="standard" color="blue">
              <InputLabel htmlFor="password_confirmation">Repeat Password</InputLabel>
              <Input id="password_confirmation" name="password_confirmation" type="password" onChange={handleChange} value={user.password_confirmation} />
            </FormControl>
          </Stack>
        </Stack>
        <Stack>
          <Button sx={{ margin: "0 auto" }} variant="contained" color="blue" size="large" type="submit">Sign In</Button>
        </Stack>
      </Box>
    </>
  )
}