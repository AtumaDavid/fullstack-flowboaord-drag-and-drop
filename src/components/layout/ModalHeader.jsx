import { Stack, Typography, IconButton } from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";

// eslint-disable-next-line react/prop-types
export default function ModalHeader({ title, onClose }) {
  return (
    <Stack direction="row" alignItems="center" justifyContent="space-between">
      <Typography variant="h6" fontWeight={700}>
        {title}
      </Typography>
      <IconButton size="small" onClick={onClose}>
        <CloseIcon />
      </IconButton>
    </Stack>
  );
}
