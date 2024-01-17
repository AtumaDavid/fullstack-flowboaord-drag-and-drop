import { Stack, CircularProgress } from "@mui/material";

export default function Loader() {
  return (
    <Stack mt={10} alignItems={"center"}>
      <CircularProgress />
    </Stack>
  );
}
