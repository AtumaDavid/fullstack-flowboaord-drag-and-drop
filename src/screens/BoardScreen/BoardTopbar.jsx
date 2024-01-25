import BackIcon from "@mui/icons-material/ArrowBack";
import DeleteIcon from "@mui/icons-material/Delete";
import { AppBar, IconButton, Stack, Toolbar, Typography } from "@mui/material";

export default function BoardTopbar() {
  return (
    <AppBar
      sx={{ borderBottom: "5px solid", borderColor: "white" }}
      position="static"
    >
      <Toolbar sx={{ justifyContent: "space-between" }}>
        <Stack direction="row" alignItems="center" spacing={1}>
          <IconButton>
            <BackIcon />
          </IconButton>
          <Typography variant="h6">Board name</Typography>
        </Stack>
        <Stack direction="row" alignItems="center" spacing={2}>
          <Typography variant="body2">
            Last updated: 5/19/2023, 1:38:02
          </Typography>
          <IconButton>
            <DeleteIcon />
          </IconButton>
        </Stack>
      </Toolbar>
    </AppBar>
  );
}
