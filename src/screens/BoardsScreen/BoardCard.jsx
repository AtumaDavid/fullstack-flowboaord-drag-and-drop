import OpenIcon from "@mui/icons-material/Launch";
import { Box, Grid, IconButton, Stack, Typography } from "@mui/material";

export default function BoardCard() {
  return (
    <>
      <Grid item xs={3}>
        <Stack
          p={2}
          bgcolor="background.paper"
          borderLeft="5px solid"
          borderColor="white"
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
                Board Namebbbb djbe dh3ebdkjne ekdjwnc
              </Typography>
            </Box>

            <IconButton size="small">
              <OpenIcon />
            </IconButton>
          </Stack>
          <Typography variant="caption">Created at: 19/01/2024</Typography>
        </Stack>
      </Grid>
    </>
  );
}
