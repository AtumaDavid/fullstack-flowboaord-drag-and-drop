import {
  Container,
  Stack,
  //   OutlinedInput,
  Button,
  Typography,
  TextField,
} from "@mui/material";

export default function AuthScreen() {
  return (
    <Container
      maxWidth="xs"
      sx={{
        mt: 10,
      }}
    >
      <Stack spacing={4} alignItems="center" textAlign="center" mb={6}>
        <h1>FLOWBOARD</h1>
        <Typography color="rgba(255,255,255,.6)">
          Visualize Your Workflow for Increased Productivity.
          <br />
          Access your Tasks Anytime and Anywhere
        </Typography>
      </Stack>
      <Stack spacing={2}>
        <TextField label="Email" />
        <TextField label="Password" />
        <Button variant="contained" size="large">
          Login
        </Button>
      </Stack>
      <Typography textAlign="center" mt={3}>
        Do not have an account?
      </Typography>
    </Container>
  );
}
