import { getAuth } from "firebase/auth";
import {
  addDoc,
  collection,
  doc,
  getDocs,
  orderBy,
  query,
  serverTimestamp,
} from "firebase/firestore";
import { db } from "../firebase";
import useStore from "../store";

export default function useApp() {
  const {
    currentUser: { uid },
  } = getAuth();

  const boardsCollectionRef = collection(db, `users/${uid}/boards`);
  const { setBoards, addBoard } = useStore();

  const createBoard = async ({ name, color }) => {
    // const collectionRef = collection(db, `users/${uid}/boards`);
    try {
      await addDoc(boardsCollectionRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });
      addBoard({
        name,
        color,
        createdAt: new Date().toLocaleDateString(),
        id: doc.id,
      });
    } catch (error) {
      console.log(error);
      throw error; //throw error to createBoard Modal trycatch
    }
  };

  //   fetch all boards
  const fetchBoards = async (setLoading) => {
    {
      try {
        const q = query(boardsCollectionRef, orderBy("createdAt", "desc"));
        const querySnapshot = await getDocs(q);
        const boards = querySnapshot.docs.map((doc) => ({
          ...doc.data(),
          id: doc.id,
          createdAt: doc.data().createdAt.toDate().toLocaleDateString(),
        }));
        // console.log(boards);
        setBoards(boards);
      } catch (error) {
        console.log(error);
      } finally {
        if (setLoading) setLoading(false);
      }
    }
  };

  return {
    createBoard,
    fetchBoards,
  };
}
