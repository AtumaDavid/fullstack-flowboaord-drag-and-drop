import {
  Container,
  Stack,
  //   OutlinedInput,
  Button,
  Typography,
  TextField,
} from "@mui/material";
import { useState } from "react";
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../../firebase";
import useStore from "../../store";

const initForm = {
  email: "",
  password: "",
};

export default function AuthScreen() {
  const [isLogin, setIsLogin] = useState(true);
  const [form, setForm] = useState(initForm);
  const [loading, setLoading] = useState(false);
  const { setToastr } = useStore();

  const authText = isLogin
    ? "Do not have an account?"
    : "Already have an account?";

  const handleChange = (e) =>
    setForm((oldForm) => ({
      ...oldForm,
      [e.target.name]: e.target.value,
    }));
  //   console.log(form);

  const handleAuth = async () => {
    try {
      setLoading(true);
      if (isLogin) {
        await signInWithEmailAndPassword(auth, form.email, form.password);
      } else {
        await createUserWithEmailAndPassword(auth, form.email, form.password);
      }
    } catch (error) {
      const msg = error.code.split("auth/")[1].split("-").join(" ");
      // console.log(msg);
      // console.log(error.code);
      setToastr(msg);
      setLoading(false);
    }
  };

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
        <TextField
          value={form.email}
          name="email"
          label="Email"
          onChange={handleChange}
        />
        <TextField
          value={form.password}
          name="password"
          label="Password"
          onChange={handleChange}
        />
        <Button
          disabled={loading || !form.email.trim() || !form.password.trim()}
          variant="contained"
          size="large"
          onClick={handleAuth}
        >
          {isLogin ? "Login" : "Register"}
        </Button>
      </Stack>
      <Typography
        onClick={() => setIsLogin((o) => !o)}
        textAlign="center"
        mt={3}
        sx={{ cursor: "pointer" }}
      >
        {authText}
      </Typography>
    </Container>
  );
}
