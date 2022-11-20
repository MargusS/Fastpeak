import React from "react";
import { Typography } from "@mui/material";
import LoginForm from "../global/LoginForm";
import CopyrightIcon from '@mui/icons-material/Copyright';
import BackgroundHeader from "../global/BackgroundHeader";

export default function LoginView() {
  return (
    <div className="login">
      <BackgroundHeader class={"login-bg"}></BackgroundHeader>
      <div className="login-logo">
        <img src="/Logo.png" alt="Logo"></img>
      </div>
      <LoginForm />
      <div className="footer">
        <Typography className="logo-name" variant="body1" gutterBottom>
          FASTPEAK
        </Typography>
        <Typography variant="body1" gutterBottom>
          All Rights Reserved
        </Typography>
        <CopyrightIcon></CopyrightIcon>
      </div>
    </div >
  )
}