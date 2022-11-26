import { IconButton, Avatar, Typography, List, ListItem, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';


export default function ChatList() {
    return (
        <List className="chat-list" sx={{ padding: 0, paddingTop: "8vh" }}>
            <ListItem className="chat" direction="row" justifyContent="space-around" alignItems="center">
                <Stack className="chat-items" direction="row" justifyContent="" alignItems="center">
                    <Avatar sx={{ width: 50, height: 50 }}></Avatar>
                    <Stack className="chat-text-item">
                        <Typography variant="h5">
                            FASTPEAK
                        </Typography>
                        <Typography variant="body1">
                            Message
                        </Typography>
                    </Stack>
                    <IconButton sx={{ padding: 0 }} className="logOut-btn" aria-label="upload picture" component="label" size="large">
                        <input hidden accept="image/*" type="file" />
                        <SettingsOutlinedIcon></SettingsOutlinedIcon>
                    </IconButton>
                </Stack>
            </ListItem>
            <Divider></Divider>
        </List>
    )
}