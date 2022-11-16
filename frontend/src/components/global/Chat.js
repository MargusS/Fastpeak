import { IconButton, Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import LogoutIcon from '@mui/icons-material/Logout';
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export default function Chat() {
    return (
        <Stack>
            <Stack className="chat" direction="row" justifyContent="space-around" alignItems="center">
                <Stack className="chat-items" direction="row" justifyContent="" alignItems="center">
                    <Avatar></Avatar>
                    <Stack className="chat-text-item">
                        <Typography variant="h5">
                            FASTPEAK
                        </Typography>
                        <Typography variant="body1">
                            FASTPEAK
                        </Typography>
                    </Stack>
                    <IconButton sx={{ padding: 0 }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                        <input hidden accept="image/*" type="file" />
                        <SettingsOutlinedIcon></SettingsOutlinedIcon>
                    </IconButton>
                </Stack>
            </Stack>
        </Stack>
    )
}