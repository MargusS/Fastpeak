import { Avatar, Typography, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import ChatOption from "./ChatOption";

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

    const handleChatClick = (chat) => {
        navigate(`/chat/${chat}`)
    }

    const handleChatDelete = (id) => {
        axios.delete(`http://127.0.0.1:3000/chats/${id}`)
            .then(() => {
                setChatListData(current => current.filter(chatList => { return chatList.id !== id }))
            })
    }

    return (
        <List className="chat-list" sx={{ padding: 0, paddingTop: "8vh" }}>
            {
                Array.from(chatListData).map((chat, i) => {
                    return (
                        <ListItem key={i} className="chat" direction="row" justifyContent="space-around" alignItems="center" onClick={() => handleChatClick(chat.id)}>
                            <Stack className="chat-items" direction="row" alignItems="center">
                                <Avatar sx={{ width: 50, height: 50 }}></Avatar>
                                <Stack className="chat-text-item">
                                    <Typography variant="h5">
                                        {chat.members[0]['username']}
                                    </Typography>
                                    <Typography variant="body1">
                                        {/* Message */}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <ChatOption chatID={chat.id} chatDelete={handleChatDelete}></ChatOption>
                            {/* <Divider></Divider> */}
                        </ListItem >
                    )
                })
            }
        </List >
    )
}