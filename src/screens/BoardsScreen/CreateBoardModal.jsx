import {
  Box,
  Button,
  Dialog,
  Stack,
  TextField,
  Typography,
} from "@mui/material";
import ModalHeader from "../../components/layout/ModalHeader";
import { colors } from "../../../theme";
import { useState } from "react";

export default function CreateBoardModal() {
  const [name, setName] = useState("");
  const [color, setColor] = useState(0);
  console.log(setName);
  //   console.log(color);
  return (
    <Dialog open fullWidth maxWidth="xs">
      <Stack p={2}>
        <ModalHeader title="Create Board" />
        <Stack my={5} spacing={3}>
          <TextField
            label="Board name"
            value={name}
            onChange={(e) => e.target.value}
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
        <Button variant="contained" size="large">
          Create
        </Button>
      </Stack>
    </Dialog>
  );
}
