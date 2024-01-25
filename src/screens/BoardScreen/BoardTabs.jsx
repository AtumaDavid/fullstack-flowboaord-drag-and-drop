import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircle";

export default function BoardTabs() {
  return (
    <>
      <Grid item xs={4}>
        <Stack p={3} bgcolor="black">
          <Stack
            direction="row"
            alignItems="center"
            sx={{ justifyContent: "space-between" }}
          >
            <Typography variant="h6" fontWeight={300}>
              Todos
            </Typography>
            <IconButton>
              <AddIcon />
            </IconButton>
          </Stack>
          <Stack>iteems</Stack>
        </Stack>
      </Grid>
    </>
  );
}
