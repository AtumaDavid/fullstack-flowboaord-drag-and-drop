import { Snackbar } from "@mui/material";
import useStore from "../../store";

export default function ToastrManager() {
  const { toastrMsg, setToastr } = useStore();
  return (
    <Snackbar
      message={toastrMsg}
      open={!!toastrMsg} //Snackbar is open if toastrMsg is truthy.
      autoHideDuration={6000}
      onClose={() => setToastr("")}
      anchorOrigin={{
        horizontal: "center",
        vertical: "top",
      }}
    />
  );
}
