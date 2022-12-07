import { IconButton, Avatar, Typography, List, ListItem, Divider, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import axios from 'axios'
import { useNavigate } from "react-router-dom";

export default function ChatList() {

    const navigate = useNavigate();
    const [chatListData, setChatListData] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`http://127.0.0.1:3000/chats`)
            .then(res => setChatListData(res.data));
    };

    const handleClick = (chat) => {
        navigate(`/chat/${chat}`)
    }

    return (
        <List className="chat-list" sx={{ padding: 0, paddingTop: "8vh" }}>
            {
                Array.from(chatListData).map((chat, i) => {
                    return (
                        <ListItem key={i} className="chat" direction="row" justifyContent="space-around" alignItems="center" onClick={() => handleClick(chat.id)}>
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
                            {/* <Divider></Divider> */}
                        </ListItem>
                    )
                })
            }
        </List>
    )
}