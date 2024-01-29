import { Grid, Stack, Typography, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/AddCircle";

// eslint-disable-next-line react/prop-types
export default function BoardTabs({ name, addTask }) {
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
              {name}
            </Typography>
            <IconButton onClick={addTask}>
              <AddIcon />
            </IconButton>
          </Stack>
          <Stack>iteems</Stack>
        </Stack>
      </Grid>
    </>
  );
}
