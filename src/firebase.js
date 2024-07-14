import { getAuth } from "firebase/auth";
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBFkSykk4kbbUPyppHGl-6IUfkO9or3Yuk",
  authDomain: "billikillers-db44a.firebaseapp.com",
  projectId: "billikillers-db44a",
  storageBucket: "billikillers-db44a.appspot.com",
  messagingSenderId: "96107200431",
  appId: "1:96107200431:web:9170218466c5f37594f95a"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const db = getFirestore(app);
export default app;