import React from "react";
import { Stack, Typography } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import BackgroundHeader from "../global/BackgroundHeader";
import SignInForm from "../global/SignInForm";

export default function Registration() {
  return (
    <>
      <Stack className="signin">
        <BackgroundHeader class={"login-bg"}></BackgroundHeader>
        <Stack className="signin-logo" alignItems="center">
          <img src="/Logo.png" alt="Logo"></img>
        </Stack>
        <SignInForm />
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
    </>
  )
}