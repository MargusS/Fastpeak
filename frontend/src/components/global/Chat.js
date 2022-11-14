import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Chat() {
    return (
        <Stack>
            <Stack className="chat-container" direction="row" justifyContent="space-around" alignItems="center">
                <Avatar></Avatar>
                <Stack>
                    <Typography variant="h5">
                        FASTPEAK
                    </Typography>
                    <Typography variant="body1">
                        FASTPEAK
                    </Typography>
                </Stack>
            </Stack>
        </Stack>
    )
}