import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  loader: true,
  isLoggedIn: false,
  boards: [],
  areBoardsFetched: false,
  toastrMsg: "",
  setToastr: (toastrMsg) => set({ toastrMsg }, false, "setToastr"),
  setLoginStatus: (status) =>
    set(
      {
        isLoggedIn: status,
        loader: false,
        boards: [],
        areBoardsFetched: false,
      },
      false,
      "setLoginStatus"
    ),
  setBoards: (boards) =>
    set({ boards, areBoardsFetched: true }, false, "setBoards"),
  addBoard: (board) =>
    set((old) => ({ boards: [board, ...old.boards] }), false, "addBoard"),
});

const useStore = create(devtools(store));

export default useStore;
