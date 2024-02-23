import { createContext, useEffect, useState } from "react";
import {
  createUserWithEmailAndPassword,
  getAuth,
  GoogleAuthProvider,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
  updateProfile,
} from "firebase/auth";
import { app } from "../FirebaseConfig/firebase";
import axios from "axios";
import useAxiosSecure from "../Hooks/useAxiosSecure";

export const UserContext = createContext(null);
const auth = getAuth(app);

const AuthContext = ({ children }) => {
  const provider = new GoogleAuthProvider();
  const [error, setError] = useState(null);
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);
  // const axiosSecure = useAxiosSecure();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      setUser(currentUser);
      // console.log(currentUser);
      if (currentUser) {
        axios
          .post("http://localhost:5000/jwt", {
            email: currentUser.email,
          })
          .then((res) => {
            console.log(res);
            const token = res.data?.token;

            localStorage.setItem("access-token", token);
          })
          .catch((error) => console.log(error.message));
      } else {
        localStorage.removeItem("access-token");
      }
      setLoading(false);
    });
    return unsubscribe;
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
    return updateProfile(auth.currentUser, {
      displayName: name,
      photoURL: photo,
    });
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
    error,
    setError,
    loading,
  };

  return (
    <UserContext.Provider value={authUser}>{children} </UserContext.Provider>
  );
};

export default AuthContext;
