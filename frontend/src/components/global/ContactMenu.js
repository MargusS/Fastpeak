import { ListItem, Divider, Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ChatList from "./ChatList";

export default function ContactMenu() {
    const [expand, setExpand] = useState(false);

    function handleClick() {
        setExpand(!expand);
    }

    return (
        <>
            <Stack className={expand ? "menu-controller expanded-menu" : "menu-controller"} justifyContent="center">
                <Button color="blue" className="menu-controller-btn" variant="contained" component="label" onClick={handleClick}>
                    {expand ? <CloseOutlinedIcon></CloseOutlinedIcon> : <AddOutlinedIcon></AddOutlinedIcon>}
                </Button>
                <Stack className={expand ? "expanded-list" : "contact-list"}>
                    <ChatList></ChatList>
                </Stack>
            </Stack >

        </>


    )
}