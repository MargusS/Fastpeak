import React from "react";
import { Stack, Typography, IconButton } from "@mui/material";
import CopyrightIcon from '@mui/icons-material/Copyright';
import BackgroundHeader from "../global/BackgroundHeader";
import RegistrationForm from "./RegistrationForm";
import ArrowBackIosNewIcon from "@mui/icons-material/ArrowBackIosNew";
import { useNavigate } from "react-router-dom";

export default function RegistrationView() {

  const navigate = useNavigate()

  return (
    <>
      <Stack className="signin">
        <BackgroundHeader class={"login-bg"}></BackgroundHeader>
        <Stack className="signin-logo" alignItems="center">
          <IconButton sx={{ color: "#000", padding: 0, position: "fixed", left: "10vw", top: "8vh" }} className="logOut-btn" component="label" size="large" onClick={() => navigate('/login')}>
            <ArrowBackIosNewIcon sx={{ width: "1.3em", height: "1.5em" }}></ArrowBackIosNewIcon>
          </IconButton>
          <img src="/Logo.png" alt="Logo"></img>
        </Stack>
        <RegistrationForm />
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