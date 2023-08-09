import React, { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firebase.config";
import {
  GithubAuthProvider,
  GoogleAuthProvider,
  createUserWithEmailAndPassword,
  getAuth,
  onAuthStateChanged,
  signInWithEmailAndPassword,
  signInWithPopup,
  signOut,
} from "firebase/auth";

export const AuthContext = createContext();
const auth = getAuth(app);

const AuthProvider = ({ children }) => {
  const [Loading, setLoading] = useState(true);
  const [user, setUser] = useState();
  const googleProvider = new GoogleAuthProvider();
  const gitProvider = new GithubAuthProvider();

  const register = (email, password) => {
    setLoading(true);
    return createUserWithEmailAndPassword(auth, email, password);
  };

  const Login = (email, password) => {
    setLoading(true);
    return signInWithEmailAndPassword(auth, email, password);
  };

  const Logout = () => {
    setLoading(true);
    return signOut(auth);
  };

  const googleSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, googleProvider);
  };

  const gitSignUp = () => {
    setLoading(true);
    return signInWithPopup(auth, gitProvider);
  };

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      setUser(user);
      setLoading(false);

      if (user && user.email) {
        const loggedUser = {
          email: user.email,
        };
        fetch("https://car-doctor-server-gilt-gamma.vercel.app/jwt", {
          method: "POST",
          headers: {
            "content-type": "application/json",
          },
          body: JSON.stringify(loggedUser),
        })
          .then((res) => res.json())
          .then((data) => {
            localStorage.setItem("genius-car-token", data.token);
          });
      } else {
        localStorage.removeItem("genius-car-token");
      }
    });
    return () => {
      unsubscribe();
    };
  }, []);

  const authInfo = {
    register,
    Login,
    user,
    Logout,
    googleSignUp,
    gitSignUp,
    Loading,
  };
  return (
    <AuthContext.Provider value={authInfo}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
