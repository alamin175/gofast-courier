import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase";

export const UserContext = createContext(null);
const auth = getAuth(app);
const provider = new GoogleAuthProvider();

const AuthContext = ({ children }) => {
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      console.log(currentUser);
    });

    return unsubscribe;
  }, []);

  const createUser = (email, password) => {
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    return signInWithPopup(auth, provider);
  };

  const logOut = () => {
    return signOut(auth);
  };

  const authUser = {
    user,
    createUser,
    signInUser,
    googleSignIn,
    logOut,
    error,
    setError,
  };

  return (
    <UserContext.Provider value={authUser}>{children} </UserContext.Provider>
  );
};

export default AuthContext;
