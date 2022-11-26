import React from "react";
import { Stack, Typography } from "@mui/material";
import LoginForm from "../global/LoginForm";
import CopyrightIcon from '@mui/icons-material/Copyright';
import BackgroundHeader from "../global/BackgroundHeader";

export default function LoginView() {
  return (
    <Stack className="login">
      <BackgroundHeader class={"login-bg"}></BackgroundHeader>
      <Stack className="login-logo" alignItems="center">
        <img src="/Logo.png" alt="Logo"></img>
      </Stack>
      <LoginForm />
      <Stack className="footer" direction="row" justifyContent="center" alignItems="center">
        <Typography className="logo-name" variant="body1" gutterBottom>
          FASTPEAK
        </Typography>
        <Typography className="policies" variant="body1" gutterBottom>
          All Rights Reserved
        </Typography>
        <CopyrightIcon></CopyrightIcon>
      </Stack>
    </Stack >
  )
}