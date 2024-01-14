import { createTheme } from "@mui/material";

const theme = createTheme({
  palette: {
    mode: "dark",
    background: {
      default: "#1d1f26",
    },
    primary: {
      main: "#bea4ff",
    },
  },

  typography: {
    button: {
      textTransform: "unset",
      fontWeight: 700,
    },
  },
});

export default theme;
