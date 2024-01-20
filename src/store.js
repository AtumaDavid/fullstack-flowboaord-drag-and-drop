import { create } from "zustand";
import { devtools } from "zustand/middleware";

const store = (set) => ({
  loader: true,
  isLoggedIn: false,
  boards: [],
  areBoardsFetched: false,
  setLoginStatus: (status) =>
    set(
      {
        isLoggedIn: status,
        loader: false,
      },
      false,
      "setLoginStatus"
    ),
  setBoards: (boards) =>
    set({ boards, areBoardsFetched: true }, false, "setBoards"),
  addBoard: (board) => set((old) => ({ boards: [board, ...old.boards] })),
});

const useStore = create(devtools(store));

export default useStore;
