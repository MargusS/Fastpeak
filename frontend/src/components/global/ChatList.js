import { IconButton, Avatar, Typography, List, ListItem, Divider, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import axios from 'axios'

export default function ChatList() {
    const [chatListData, setChatListData] = useState({})

    const getData = () => {
        axios.get(`http://127.0.0.1:3000/chats`)
            .then(res => setChatListData(res.data));
    };

    useEffect(() => {
        getData();
    }, []);
    return (
        <List className="chat-list" sx={{ padding: 0, paddingTop: "8vh" }}>
            {
                Array.from(chatListData).map((chat, i) =>
                    <>
                        <ListItem key={i} className="chat" direction="row" justifyContent="space-around" alignItems="center">
                            <Stack className="chat-items" direction="row" justifyContent="" alignItems="center">
                                <Avatar sx={{ width: 50, height: 50 }}></Avatar>
                                <Stack className="chat-text-item">
                                    <Typography variant="h5">
                                        {chat.name}
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
                    </>
                )
            }
        </List>
    )
}