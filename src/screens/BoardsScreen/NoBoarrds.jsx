import { Stack, Typography } from "@mui/material";

export default function NoBoarrds() {
  return (
    <>
      <Stack textAlign="center" mt={15} spacing={1}>
        <Typography variant="h5">No boards Created</Typography>
        <Typography variant="h5">Create your first board</Typography>
      </Stack>
    </>
  );
}
