import { Avatar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

export default function Chat() {
    return (
        <Stack>
            <Stack className="chat" direction="row" justifyContent="space-around" alignItems="center">
                <Stack className="chat-items" direction="row" justifyContent="space-between" alignItems="center">
                    <Avatar></Avatar>
                    <Stack className="chat-text-item">
                        <Typography variant="h5">
                            FASTPEAK
                        </Typography>
                        <Typography variant="body1">
                            FASTPEAK
                        </Typography>
                    </Stack>
                </Stack>
            </Stack>
        </Stack>
    )
}