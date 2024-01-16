import { initializeApp } from "firebase/app";
import { getAuth, connectAuthEmulator } from "firebase/auth";
import { getFirestore, connectFirestoreEmulator } from "firebase/firestore";
import { getFunctions, connectFunctionsEmulator } from "firebase/functions";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAGLRyjc1-sZMxTP1OcJE3U4m_dBOmiKvI",
  authDomain: "flowboard-32b3b.firebaseapp.com",
  projectId: "flowboard-32b3b",
  storageBucket: "flowboard-32b3b.appspot.com",
  messagingSenderId: "513114291488",
  appId: "1:513114291488:web:b5cdbe0aae3c96cbe12b45",
};

// Initialize Firebase
// const app = initializeApp(firebaseConfig);

export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const fbFunctions = getFunctions(app);

// @ts-ignore
if (process.env.NODE_ENV === "development") {
  connectAuthEmulator(auth, "http://localhost:9099"),
    connectFirestoreEmulator(db, "localhost", 8080),
    connectFunctionsEmulator(fbFunctions, "localhost", 5001);
}
