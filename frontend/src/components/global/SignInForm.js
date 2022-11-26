import React from "react";
import { FormControl, FormHelperText, Input, InputLabel, Button } from "@mui/material";
import { Stack } from "@mui/system";
import Typography from '@mui/material/Typography';
import AddPhotoAlternateIcon from '@mui/icons-material/AddPhotoAlternate';

export default function SignInForm() {
  return (
    <>
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
            <InputLabel htmlFor="userName" >Username</InputLabel>
            <Input id="userName" type="text" />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="email">Email</InputLabel>
            <Input id="email" type="password" />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="pwd">Password</InputLabel>
            <Input id="pwd" type="password" />
          </FormControl>
          <FormControl variant="standard" color="blue">
            <InputLabel htmlFor="pwd-cf">Repeat Password</InputLabel>
            <Input id="pwd-cf" type="password" />
          </FormControl>
        </Stack>
      </Stack>
      <Button sx={{ margin: "0 auto" }} variant="contained" color="blue" size="large">Sign In</Button>
    </>
  )
}