import { Grid } from "@mui/material";
import BoardTabs from "./BoardTabs";

export default function BoardInterface() {
  return (
    <>
      <Grid container px={2} mt={5} spacing={4}>
        <BoardTabs />
        <BoardTabs />
        <BoardTabs />
        <BoardTabs />
      </Grid>
    </>
  );
}
