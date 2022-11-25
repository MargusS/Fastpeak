import React from "react";
import { Stack } from "@mui/system";
import { Avatar, IconButton, Typography } from "@mui/material";
import BackgroundHeader from "../global/BackgroundHeader";
import ReplyIcon from '@mui/icons-material/Reply';
import ArrowBackIosNewIcon from '@mui/icons-material/ArrowBackIosNew';

export default function Chat() {
    return (
        <>
            <BackgroundHeader class={"header-bg-chat"}></BackgroundHeader>
            <Stack className="header-chat" justifyContent="center" alignItems="start" sx={{ paddingLeft: "1em" }}>
                <Stack direction="row" justifyContent="center" alignItems="center" sx={{ padding: "1em" }}>
                    <IconButton sx={{ color: "#000", padding: 0 }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                        <ArrowBackIosNewIcon sx={{ width: "1.5em", height: "1.5em" }}></ArrowBackIosNewIcon>
                    </IconButton>
                    <Avatar sx={{ width: 50, height: 50, margin: "0 .5em" }}></Avatar>
                    <Stack className="chat-text-item">
                        <Typography variant="h5">
                            FASTPEAK
                        </Typography>
                        <Typography variant="body1">
                            Status
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>

            <Stack className="conversation">
                <Stack className="messages-body">

                </Stack>
            </Stack>
        </>
    )
}