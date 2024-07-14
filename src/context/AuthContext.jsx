import { createContext, useContext } from "react";
import { 
  createUserWithEmailAndPassword, 
  signInWithEmailAndPassword, 
  onAuthStateChanged, 
  signOut 
} from 'firebase/auth';
import { auth, db } from "../firebase";
import { useEffect } from "react";
import { useState } from "react";
import { setDoc, doc } from 'firebase/firestore';

const UserContext = createContext();

export const AuthContextProvider = ({ children }) => {

  const [user, setUser] = useState({});

  const createUser = (email, password) => {
    createUserWithEmailAndPassword(auth, email, password);
    setDoc(doc(db, 'users', email), {
      likedPosts: []
    })
  }

  const signIn = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const logout = () => {
    return signOut(auth);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      console.log(currentUser);
      setUser(currentUser);
    })

    return () => {
      unsubscribe();
    };
  },[]);

  return (
    <UserContext.Provider value={ { createUser, user, logout, signIn } }>
      { children }
    </UserContext.Provider>
  )
}

export const UserAuth = () => {
  return useContext(UserContext);
}