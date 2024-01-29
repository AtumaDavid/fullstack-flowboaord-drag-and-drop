import OpenIcon from "@mui/icons-material/Launch";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";
import { colors } from "../../../theme";
import { useNavigate } from "react-router-dom";

// eslint-disable-next-line react/prop-types
export default function BoardCard({ name, color, createdAt, id }) {
  const navigate = useNavigate();
  return (
    <>
      <Grid item xs={3}>
        <Stack
          p={2}
          bgcolor="background.paper"
          borderLeft="5px solid"
          borderColor={colors[color]}
        >
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
          >
            <Box width="50%">
              <Typography
                variant="h6"
                fontWeight={400}
                whiteSpace="nowrap"
                overflow="hidden"
                textOverflow="ellipsis"
              >
                {name}
              </Typography>
            </Box>

            <IconButton size="small" onClick={() => navigate(`/boards/${id}`)}>
              <OpenIcon />
            </IconButton>
          </Stack>
          <Typography variant="caption">Created at: {createdAt}</Typography>
        </Stack>
      </Grid>
    </>
  );
}
