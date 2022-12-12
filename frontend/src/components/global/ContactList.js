import { IconButton, Avatar, Typography, List, ListItem, Divider } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from 'axios'

export default function ContactList() {
    const [contactListData, setContactListData] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`http://127.0.0.1:3000/contacts?id=1`)
            .then(res => setContactListData(res.data));
    };

    const handleClick = (contact) => {
        console.log(contact)
    }

    return (
        <>
            <List className="contact-list" sx={{ padding: 0, marginTop: "3vh" }}>
                <Stack sx={{ paddingLeft: "3em" }}>
                    <Typography variant="h6">
                        New Chat
                    </Typography>
                </Stack>
                {
                    Array.from(contactListData).map((contact, i) => {
                        return (
                            <ListItem key={i} className="contact" direction="row" justifyContent="space-around" alignItems="center" onClick={() => handleClick(contact.id)}>
                                <Stack className="chat-items" direction="row" justifyContent="" alignItems="center">
                                    <Avatar sx={{ width: 50, height: 50 }}></Avatar>
                                    <Stack className="chat-text-item">
                                        <Typography variant="h5">
                                            {contact.username}
                                        </Typography>
                                        <Typography variant="body1">
                                            {contact.status}
                                        </Typography>
                                    </Stack>
                                </Stack>
                                {/* <Divider></Divider> */}
                            </ListItem>
                        )
                    })
                }
            </List>
        </>
    )
}