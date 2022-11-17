import { IconButton, Avatar, Typography, List, ListItem, Divider, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ChatList from "./ChatList";
import Skeleton from '@mui/material/Skeleton';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';

export default function ContactMenu() {
    const drawerBleeding = 556;
    const [expand, setExpand] = useState(false);
    const [open, setOpen] = useState(false);

    const toggleDrawer = (newOpen) => () => {
        setOpen(newOpen);
    };
    function handleClick() {
        setExpand(!expand);
    }

    return (
        <>
            <Stack className={expand ? "menu-controller expanded" : "menu-controller"} justifyContent="center">
                <Button color="blue" className="menu-controller-btn" variant="contained" component="label" onClick={toggleDrawer(true)}>
                    {expand ? <CloseOutlinedIcon></CloseOutlinedIcon> : <AddOutlinedIcon></AddOutlinedIcon>}
                </Button>
            </Stack >
            <SwipeableDrawer
                // container={container}
                anchor="bottom"
                open={open}
                onClose={toggleDrawer(false)}
                onOpen={toggleDrawer(true)}
                swipeAreaWidth={drawerBleeding}
                disableSwipeToOpen={false}
                ModalProps={{
                    keepMounted: true,
                }}
            >
                <ChatList></ChatList>
                <Skeleton variant="rectangular" height="100%" />
            </SwipeableDrawer>
        </>


    )
}