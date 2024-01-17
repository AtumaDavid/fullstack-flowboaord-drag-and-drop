import { Dialog, Stack } from "@mui/material";
import ModalHeader from "../../components/layout/ModalHeader";

export default function CreateBoardModal() {
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Create Board" />
      </Stack>
    </Dialog>
  );
}
