import LogoutIcon from "@mui/icons-material/ExitToApp";
import { AppBar, Button, Stack, Toolbar, Typography } from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function Topbar({ openModal }) {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">FLOWBOARD</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained" onClick={openModal}>
            Create Board
          </Button>
          <Button startIcon={<LogoutIcon />} color="inherit">
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
