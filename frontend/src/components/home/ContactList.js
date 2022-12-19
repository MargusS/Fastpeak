import { Avatar, Typography, List, ListItem, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React, { useEffect, useState } from "react";
import axios from 'axios'
import { useNavigate } from "react-router-dom";
import DeleteOutlineIcon from '@mui/icons-material/DeleteOutline';

export default function ContactList() {
    const navigate = useNavigate();
    const [contactListData, setContactListData] = useState({})

    useEffect(() => {
        getData();
    }, []);

    const getData = () => {
        axios.get(`/api/contacts`)
            .then(res => setContactListData(res.data));
    };

    const handleClickDelete = (id) => {
        axios.delete(`/api/contacts/${id}`)
            .then(getData())
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
                            <ListItem key={i} className="contact" direction="row" justifyContent="space-around" alignItems="center" onClick={() => navigate(`/newchat/${contact.id}`)}>
                                <Stack className="chat-items" direction="row" alignItems="center">
                                    <Avatar sx={{ width: 50, height: 50 }}></Avatar>
                                    <Stack className="chat-text-item">
                                        <Typography variant="h5">
                                            {contact.username}
                                        </Typography>
                                        <Typography variant="body1">
                                            {contact.status}
                                        </Typography>
                                    </Stack>
                                    <Button sx={{ height: 40, width: 40, borderRadius: 5 }} color="orange" variant="contained" onClick={(e) => {
                                        e.stopPropagation();
                                        handleClickDelete(contact.id)
                                    }}>
                                        <DeleteOutlineIcon></DeleteOutlineIcon>
                                    </Button>
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