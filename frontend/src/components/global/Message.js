import { Stack } from "@mui/system";
import React from "react";
import { Avatar, IconButton, Paper, Typography } from "@mui/material";

export default function Message(props) {
  return (
    <>
      <Paper className={props.type} sx={{ width: "fit-content", maxWidth: "65vw", marginBottom: ".2em", wordBreak: "break-all" }}>
        <Typography variant="body2" sx={{ padding: "1em" }}>
          {props.content}
        </Typography>
      </Paper>
    </>
  )
}