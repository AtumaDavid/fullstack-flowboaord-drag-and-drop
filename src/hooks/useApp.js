import { addDoc, collection, serverTimestamp } from "firebase/firestore";
import { db } from "../firebase";
import { getAuth } from "firebase/auth";

export default function useApp() {
  const {
    currentUser: { uid },
  } = getAuth();

  const createBoard = async ({ name, color }) => {
    const collectionRef = collection(db, `users/${uid}/boards`);
    try {
      await addDoc(collectionRef, {
        name,
        color,
        createdAt: serverTimestamp(),
      });
    } catch (error) {
      console.log(error);
    }
  };
  return {
    createBoard,
  };
}
