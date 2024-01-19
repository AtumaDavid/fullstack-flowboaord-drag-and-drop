import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { colors } from "../../../theme";
import ModalHeader from "../../components/layout/ModalHeader";
import useApp from "../../hooks/useApp";

// eslint-disable-next-line react/prop-types
export default function CreateBoardModal({ closeModal }) {
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  const [loading, setLoading] = useState(false);

  //   console.log(setName);
  //   console.log(color);

  const { createBoard } = useApp();

  const handleCreate = async () => {
    try {
      setLoading(true);
      createBoard({ name, color });
      closeModal();
    } catch (error) {
      setLoading(false);
      console.log(error);
    }
  };

  return (
    <Dialog open fullWidth maxWidth="xs" onClose={closeModal}>
      <Stack p={2}>
        <ModalHeader title="Create Board" onClose={closeModal} />
        <Stack my={5} spacing={3}>
          <TextField
            label="Board name"
            value={name}
            onChange={(e) => setName(e.target.value)}
          />
          <Stack direction="row" spacing={1.5}>
            <Typography>Color: </Typography>
            <Stack spacing={1} direction="row">
              {colors.map((clr, index) => (
                <Box
                  sx={{
                    cursor: "pointer",
                    border: color === index ? "3px solid #383838" : "none",
                    outline: `2px solid ${clr}`,
                  }}
                  onClick={() => setColor(index)}
                  key={clr}
                  height={25}
                  width={25}
                  backgroundColor={clr}
                  borderRadius="50%"
                />
              ))}
            </Stack>
          </Stack>
        </Stack>
        <Button
          disabled={loading}
          variant="contained"
          size="large"
          onClick={handleCreate}
        >
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}
