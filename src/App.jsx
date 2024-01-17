import { CssBaseline, ThemeProvider } from "@mui/material";
import theme from "../theme";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import AuthScreen from "./screens/AuthScreen/AuthScreen";
import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { auth } from "./firebase";
import useStore from "./store";
import Loader from "./components/layout/Loader";
import PublicOnlyRoute from "./components/utils/PublicOnlyRoute";
import BoardsScreen from "./screens/BoardsScreen/BoardsScreen";

function App() {
  const { loader, setLoginStatus } = useStore();

  useEffect(() => {
    const unsub = onAuthStateChanged(auth, (user) => {
      // console.log(user);
      setLoginStatus(!!user);
    });
    return () => unsub();
  }, []);

  if (loader) return <Loader />;

  return (
    <ThemeProvider theme={theme}>
      <CssBaseline />

      <BrowserRouter>
        <Routes>
          {/* <Route path="/" element={<AuthScreen />} /> */}
          <Route
            path="/"
            element={<PublicOnlyRoute Component={AuthScreen} />}
          />
          <Route
            path="/boards"
            element={<BoardsScreen Component={BoardsScreen} />}
          />
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  );
}

export default App;
