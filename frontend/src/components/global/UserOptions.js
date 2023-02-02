import React, { useState } from "react";
import { IconButton, Typography, Stack, Popover } from "@mui/material";
import { Button } from "@mui/material";
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import PermIdentityIcon from '@mui/icons-material/PermIdentity';
import PictureAsPdfIcon from '@mui/icons-material/PictureAsPdf';
import LogoutIcon from '@mui/icons-material/Logout';
import { blueGrey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";
import axios from "axios";

export default function UserOptions() {
  const [options, setOptions] = useState(null)
  const navigate = useNavigate()

  const handleOptionsClick = (event) => {
    event.stopPropagation();
    setOptions(event.currentTarget);
  }

  const handleClosePopover = (event) => {
    event.stopPropagation();
    setOptions(null);
  };

  const handleLogOut = () => {
    axios.delete('/api/logout')
      .then(navigate('/login'))
  }

  const open = Boolean(options);
  const id = open ? 'simple-popover' : undefined;

  return (
    <div>
      <Stack>
        <IconButton sx={{ padding: 0 }} className="logOut-btn" aria-describedby={id} variant="contained" onClick={handleOptionsClick} component="label" size="large">
          <ExpandMoreIcon></ExpandMoreIcon>
        </IconButton>
        <Popover id={id} open={open} anchorEl={options} onClose={handleClosePopover} anchorOrigin={{ vertical: 'bottom', horizontal: 'center', }} transformOrigin={{ vertical: 'top', horizontal: 'center' }} sx={{ marginTop: 2 }}>
          <Stack alignItems="end" sx={{ backgroundColor: "#272E4F", minWidth: "4em" }} >
            <Button onClick={(event) => {
              event.stopPropagation()
              navigate('/account')
            }} sx={{ p: "1em", width: "100%", justifyContent: "start" }} size="large" startIcon={<PermIdentityIcon sx={{ color: blueGrey[500] }} />}>
              <Typography sx={{ color: "#fff" }} variant="subtitle2">
                Account
              </Typography>
            </Button>
            <Button sx={{ p: "1em", width: "100%", justifyContent: "start" }} size="large" startIcon={<PictureAsPdfIcon sx={{ color: blueGrey[500] }} />}>
              <Typography sx={{ color: "#fff" }} variant="subtitle2">
                Report
              </Typography>
            </Button>
            <Button onClick={handleLogOut} sx={{ p: "1em", width: "100%", justifyContent: "start" }} size="large" startIcon={<LogoutIcon sx={{ color: blueGrey[500] }} />}>
              <Typography sx={{ color: "#fff" }} variant="subtitle2">
                Logout
              </Typography>
            </Button>
          </Stack>
        </Popover>
      </Stack>
    </div >
  )
}