import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase";
import axios from "axios";

import useAxiosPublic from "../Hooks/useAxiosPublic";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  // TODO: axiossecure will implement after error solving

  const axiosPublic = useAxiosPublic();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      if (currentUser) {
        axiosPublic
          .post("jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            // console.log(res);
            const token = res.data?.token;

            localStorage.setItem("access-token", token);
          })
          .catch((error) => console.log(error.message));
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return () => {
      return unsubscribe;
    };
  }, []);

  const createUser = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const signInUser = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const googleSignIn = () => {
    setLoading(true);
    return signInWithPopup(auth, provider);
  };

  const updateUserProfile = (name, photo) => {
    setLoading(true);
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
  };

  const resetPassword = (email) => {
    setLoading(true);
    return sendPasswordResetEmail(auth, email);
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
    updateUserProfile,
    resetPassword,
    error,
    setError,
    loading,
  };

  return (
    <UserContext.Provider value={authUser}>{children} </UserContext.Provider>
  );
};

export default AuthContext;
