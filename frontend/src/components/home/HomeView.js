import { IconButton, Typography, Avatar } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import BackgroundHeader from "../global/BackgroundHeader";
import ChatList from "./ChatList";
import ContactMenu from "./ContactMenu";

import UserOptions from "../global/UserOptions";

export default function HomeView() {
    const localAvatar = localStorage.getItem('user_avatar');

    return (
        <div className="home">
            <BackgroundHeader class={"header-bg"}></BackgroundHeader>
            <Stack className="header" justifyContent="center" alignItems="center">
                <Stack direction="row" className="header-items" justifyContent="space-between" alignItems="center">
                    <IconButton sx={{ color: "#fff" }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                        <Avatar sx={{ marginRight: 1 }} src={localAvatar} ></Avatar>
                        <UserOptions></UserOptions>
                    </IconButton>
                    <Typography className="logo-name" variant="h5">
                        FASTPEAK
                    </Typography>
                </Stack>
            </Stack>
            <ChatList></ChatList>
            <ContactMenu></ContactMenu>
        </div>
    )
}