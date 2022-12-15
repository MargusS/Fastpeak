import React, { useState } from "react";
import { FormControl, Input, InputLabel, Button } from "@mui/material";
import { Box, Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function LoginForm() {
  const navigate = useNavigate()
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
    axios.post(`/api/sessions`, { user }, { withCredentials: true })
      .then(res => {
        console.log(res)
        navigate(`/home`)
      })
      .catch(err => { console.log(err) })
  };

  const handleClick = () => {
    navigate('/registration')
  }

  return (
    <>
      <Box component="form" onSubmit={handleSubmit}>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" name="email" type="email" onChange={handleChange} value={user.email} />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="password">Password</InputLabel>
            <Input id="password" name="password" type="password" onChange={handleChange} value={user.password} />
          </FormControl>
          <Button className="logIn-btn" variant="contained" color="blue" size="large" type="submit">Log In</Button>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" mt={1}>
          <Typography className="test" variant="body2" color="white">
            No account yet?
          </Typography>
          <Button sx={{ verticalAlign: "baseline" }} className="test2" variant="text" color="blue" onClick={handleClick}>Sign Up</Button>
        </Stack>
      </Box>
    </>
  )
}