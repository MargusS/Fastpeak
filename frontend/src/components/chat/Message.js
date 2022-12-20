import React from "react";
import { Paper, Typography } from "@mui/material";

export default function Message(props) {
  return (
    <>
      <Paper className={props.type} sx={{ width: "fit-content", maxWidth: "65vw", marginBottom: ".2em", wordBreak: "break-all" }}>
        <Typography variant="body2" color="white" sx={{ padding: "1em" }}>
          {props.content}
        </Typography>
      </Paper>
    </>
  )
}