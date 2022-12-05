import React, { useState } from "react";
import { FormControl, FormHelperText, Input, InputLabel, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import axios from 'axios'

export default function LoginForm() {

  const [user, setUser] = useState({
    email: "",
    password: "",
  });

  const handleChange = event => {
    setUser({
      ...user,
      [event.target.name]: event.target.value
    })
  }

  const handleSubmit = event => {
    event.preventDefault();
    axios.post(`http://127.0.0.1:3000/sessions`, { user })
      .then(console.log("ok"))
  };

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <FormControl variant="standard" color="blue" >
            <InputLabel htmlFor="email" >Username</InputLabel>
            <Input id="email" type="email" onChange={handleChange} value={user.email} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" type="password" onChange={handleChange} value={user.password} />
          </FormControl>
          <Button className="logIn-btn" variant="contained" color="blue" size="large" type="submit">Log In</Button>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" mt={1}>
          <Typography className="test" variant="body2" color="white">
            No account yet?
          </Typography>
          <Button sx={{ verticalAlign: "baseline" }} className="test2" variant="text" color="blue">Sign Up</Button>
        </Stack>
      </Box>
    </>
  )
}