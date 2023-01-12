import { Avatar, Typography, List, ListItem } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DeleteChat from "../global/DeleteChat";

export default function ChatList() {

    const navigate = useNavigate();
    const [chatListData, setChatListData] = useState([])

    useEffect(() => {
        axios.get(`/api/chats`)
            .then(res => {
                setChatListData(res.data)
            });
    }, []);

    const updateListData = (data, op) => {
        if (op === "create") {
            setChatListData([
                data,
                ...chatListData
            ])
        }
        if (op === "destroy") {
            setChatListData(prev => prev.filter(chatList => { return chatList.id !== data.id }))
        }

    };

    useEffect(() => {
        const ws = new WebSocket('ws://127.0.0.1:3000/cable')
        ws.onopen = () => {
            ws.send(
                JSON.stringify({
                    command: "subscribe",
                    identifier: JSON.stringify({
                        channel: "ListChannel",
                    }),
                })
            );
        }

        ws.onmessage = (e) => {
            const data = JSON.parse(e.data);
            if (data.type === "ping") return;
            if (data.type === "welcome") return;
            if (data.type === "confirm_subscription") return;

            const message = data.message;
            updateListData(message, message.type);
        };
    }, [chatListData])

    const handleChatClick = (chat) => {
        navigate(`/chat/${chat}`)
    }

    const handleChatDelete = (id) => {
        axios.delete(`/api/chats/${id}`)
            .then(() => {
                setChatListData(prev =>
                    prev.filter(chatList => { return chatList.id !== id })
                )
            })
    }

    return (
        <List className="chat-list" sx={{ padding: 0, paddingTop: "8vh" }}>
            {
                Array.from(chatListData).map((chat, i) => {
                    return (
                        <ListItem key={i} className="chat" direction="row" justifyContent="space-around" alignItems="center" onClick={() => handleChatClick(chat.id)}>
                            <Stack className="chat-items" direction="row" alignItems="center">
                                <Avatar sx={{ width: 50, height: 50 }} src={chat.members[0]['avatar_url']} alt="Avatar"></Avatar>
                                <Stack className="chat-text-item">
                                    <Typography variant="h5">
                                        {chat.members[0]['username']}
                                    </Typography>
                                    <Typography variant="body1">
                                        {/* Message */}
                                    </Typography>
                                </Stack>
                            </Stack>
                            <DeleteChat chatID={chat.id} chatDelete={handleChatDelete}></DeleteChat>
                        </ListItem >
                    )
                })
            }
        </List >
    )
}