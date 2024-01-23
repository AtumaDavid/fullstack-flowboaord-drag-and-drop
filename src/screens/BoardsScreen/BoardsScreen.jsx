import { useEffect, useState } from "react";
import CreateBoardModal from "./CreateBoardModal";
import Topbar from "./Topbar";
// import NoBoarrds from "./NoBoarrds";
import { Grid, Stack } from "@mui/material";
import BoardCard from "./BoardCard";
import useApp from "../../hooks/useApp";
import Loader from "../../components/layout/Loader";
import useStore from "../../store";

export default function BoardsScreen() {
  const [showModal, setShowModal] = useState(false);
  const [loading, setLoading] = useState(true);
  const { fetchBoards } = useApp();
  const { areBoardsFetched, boards } = useStore();

  useEffect(() => {
    if (!areBoardsFetched) fetchBoards(setLoading);
    fetchBoards();
  }, []);

  if (loading) return <Loader />;
  return (
    <>
      <Topbar openModal={() => setShowModal(true)} />
      {showModal && <CreateBoardModal closeModal={() => setShowModal(false)} />}
      {/* <NoBoarrds /> */}

      <Stack px={3} mt={5}>
        <Grid container spacing={4}>
          {/* {boards.map((board) => (
            <BoardCard key={board.id} {...board} />
          ))} */}
          {boards.map((board, index) => (
            <BoardCard key={`${board.id}-${index}`} {...board} />
          ))}
        </Grid>
      </Stack>
    </>
  );
}
