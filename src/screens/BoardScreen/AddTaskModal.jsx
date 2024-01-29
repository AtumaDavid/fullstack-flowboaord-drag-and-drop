import CloseIcon from "@mui/icons-material/Close";
import {
  Button,
  Chip,
  Dialog,
  IconButton,
  OutlinedInput,
  Stack,
  Typography,
} from "@mui/material";

// eslint-disable-next-line react/prop-types
export default function AddTaskModal({ tabName, onClose }) {
  return (
    <Dialog open onClose={onClose} fullWidth maxWidth="xs">
      <Stack p={2}>
        <Stack
          mb={3}
          direction="row"
          alignItems="center"
          justifyContent="space-between"
        >
          <Typography variant="h6">Add task</Typography>
          <IconButton onClick={onClose}>
            <CloseIcon />
          </IconButton>
        </Stack>
        <Stack spacing={2}>
          <Stack direction="row" alignItems="center" spacing={2}>
            <Typography>Status:</Typography>
            <Chip label={tabName} size="small" />
          </Stack>
          <OutlinedInput />
          <Button variant="contained">Add task</Button>
        </Stack>
      </Stack>
    </Dialog>
  );
}
