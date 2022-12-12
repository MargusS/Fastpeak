import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import ContactList from "./ContactList";
import { blueGrey } from "@mui/material/colors";

export default function ContactMenu() {
    const [expand, setExpand] = useState(false);

    function handleClick() {
        setExpand(!expand);
    }

    return (
        <>
            <Button color="blue" sx={{ position: "fixed", zIndex: 1000, bottom: 20, right: "10%", width: 20, minHeight: 60, borderRadius: "50%" }} className={expand ? "menu-controller-btn-expanded" : ""} variant="contained" component="label" onClick={handleClick}>
                {expand ? <CloseOutlinedIcon></CloseOutlinedIcon> : <AddOutlinedIcon></AddOutlinedIcon>}
            </Button>
            <Stack className={expand ? "menu-controller expanded-menu" : "menu-controller"} sx={{ backgroundColor: blueGrey[100] }} justifyContent="center">
                <Stack className={expand ? "expanded-list" : "contact-list"}>
                    <ContactList></ContactList>
                </Stack>
            </Stack >

        </>


    )
}