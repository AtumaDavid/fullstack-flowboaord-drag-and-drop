import { AppBar, Toolbar, Button, Stack, Typography } from "@mui/material";
import LogoutIcon from "@mui/icons-material/ExitToApp";

export default function Topbar() {
  return (
    <AppBar position="static">
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Typography variant="h5">FLOWBOARD</Typography>
        <Stack direction="row" spacing={2}>
          <Button variant="contained">Create Board</Button>
          <Button startIcon={<LogoutIcon />} color="inherit">
            Logout
          </Button>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
