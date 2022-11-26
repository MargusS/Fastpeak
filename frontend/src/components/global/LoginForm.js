import React from "react";
import { FormControl, FormHelperText, Input, InputLabel, Button } from "@mui/material";
import { Container, Stack } from "@mui/system";
import Typography from '@mui/material/Typography';

export default function LoginForm() {
  return (
    <>
      <Container>
        <Stack spacing={3} justifyContent="center" alignItems="center">
          <item>
            <FormControl variant="standard" color="blue" >
              <InputLabel htmlFor="email" >Username</InputLabel>
              <Input id="email" type="email" />
            </FormControl>
          </item>
          <item>
            <FormControl variant="standard" color="blue">
              <InputLabel htmlFor="pwd">Password</InputLabel>
              <Input id="pwd" type="password" />
            </FormControl>
          </item>
          <item>
            <Button className="logIn-btn" variant="contained" color="blue" size="large">Log In</Button>
          </item>
        </Stack>
        <Stack direction="row" justifyContent="center" alignItems="center" mt={1}>
          <item>
            <Typography className="test" variant="body2" color="white">
              No account yet?
            </Typography>
          </item>
          <item>
            <Button sx={{ verticalAlign: "baseline" }} className="test2" variant="text" color="blue">Sign Up</Button>
          </item>
        </Stack>
      </Container>
    </>
  )
}