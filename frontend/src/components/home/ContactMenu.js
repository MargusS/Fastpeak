import { Button } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";
import { useState } from "react";
import AddOutlinedIcon from '@mui/icons-material/AddOutlined';
import CloseOutlinedIcon from '@mui/icons-material/CloseOutlined';
import PersonAddAltOutlinedIcon from '@mui/icons-material/PersonAddAltOutlined';
import ContactList from "./ContactList";
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function ContactMenu() {
    const [expand, setExpand] = useState(false);
    const navigate = useNavigate();

    function handleClick() {
        setExpand(!expand);
    }

    return (
        <>
            <Button color="blue" sx={{ position: "fixed", zIndex: 1000, bottom: 20, right: "5%", width: 20, minHeight: 60, borderRadius: "50%" }} className={expand ? "menu-controller-btn-expanded" : ""} variant="contained" component="label" onClick={handleClick}>
                {expand ? <CloseOutlinedIcon></CloseOutlinedIcon> : <AddOutlinedIcon></AddOutlinedIcon>}
            </Button>
            <Stack className={expand ? "menu-controller expanded-menu" : "menu-controller"} sx={{ backgroundColor: blueGrey[100] }} justifyContent="center">
                <Stack className={expand ? "expanded-list" : "contact-list"}>
                    <Stack className="new-contact" justifyContent="center" alignItems="center" sx={{ width: "100%", height: "2em", marginTop: "2em" }}>
                        <Button variant="contained" color="blue" sx={{ width: 250, columnGap: "1em" }} component="label" onClick={() => navigate('/newcontact')}>
                            <PersonAddAltOutlinedIcon></PersonAddAltOutlinedIcon>
                            Add New Contact
                        </Button>
                    </Stack>
                    <ContactList></ContactList>
                </Stack>
            </Stack >
        </>
    )
}