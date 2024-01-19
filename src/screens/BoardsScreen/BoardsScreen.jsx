import { useState } from "react";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
// import NoBoarrds from "./NoBoarrds";
import { Grid, Stack } from "@mui/material";
import BoardCard from "./BoardCard";

export default function BoardsScreen() {
  const [showModal, setShowModal] = useState(false);
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoarrds /> */}

      <Stack px={3} mt={5}>
        <Grid container spacing={4}>
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
          <BoardCard />
        </Grid>
      </Stack>
    </>
  );
}
