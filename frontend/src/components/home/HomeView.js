import { IconButton, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BackgroundHeader from "../global/BackgroundHeader";
import LogoutIcon from '@mui/icons-material/Logout';
import Chat from "../global/Chat";

export default function HomeView() {
    return (
        <div className="home">
            <BackgroundHeader class={"header-bg"}></BackgroundHeader>
            <Stack className="header" justifyContent="center" alignItems="center">
                <Stack direction="row" className="header-items" justifyContent="space-between" alignItems="center">
                    <Typography className="logo-name" variant="h5">
                        FASTPEAK
                    </Typography>
                    <IconButton sx={{ color: "#fff" }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                        <input hidden accept="image/*" type="file" />
                        <LogoutIcon></LogoutIcon>
                    </IconButton>
                </Stack>
            </Stack>
            <Chat></Chat>

        </div>
    )
}