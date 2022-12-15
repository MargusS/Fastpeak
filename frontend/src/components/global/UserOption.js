import React, { useState } from "react";
import { IconButton, Typography, Stack, Popover } from "@mui/material";
import { Button } from "@mui/material";
import SettingsOutlinedIcon from '@mui/icons-material/SettingsOutlined';
import DeleteIcon from '@mui/icons-material/Delete';
import { blueGrey } from "@mui/material/colors";

export default function UserOption() {
    const [options, setOptions] = useState(null)

    const handleOptionsClick = (event) => {
        event.stopPropagation();
        setOptions(event.currentTarget);
    }

    const handleClosePopover = (event) => {
        event.stopPropagation();
        setOptions(null);
    };

    const open = Boolean(options);
    const id = open ? 'simple-popover' : undefined;

    return (
        <div>
            <Stack>
                <IconButton sx={{ padding: 0 }} className="logOut-btn" aria-describedby={id} variant="contained" onClick={handleOptionsClick} component="label" size="large">
                    <SettingsOutlinedIcon></SettingsOutlinedIcon>
                </IconButton>
                <Popover id={id} open={open} anchorEl={options} onClose={handleClosePopover} anchorOrigin={{ vertical: 'bottom', horizontal: 'left', }} transformOrigin={{ vertical: 'top', horizontal: 'center' }}>
                    <Stack direction="row" alignItems="center" justifyContent="space-around" sx={{ backgroundColor: "#272E4F", minWidth: "4em" }} >
                        <Button onClick={onDelete} sx={{ p: "1em" }} size="large" startIcon={<DeleteIcon sx={{ color: blueGrey[500] }} />}>
                            <Typography sx={{ color: "#fff" }} variant="subtitle2">
                                DELETE
                            </Typography>
                        </Button>
                    </Stack>
                </Popover>
            </Stack>
        </div >
    )
}