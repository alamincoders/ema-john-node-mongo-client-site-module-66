import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, getIdToken } from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [isLoading, setIsLoading] = useState(true);
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();
  const googleProvider = new GoogleAuthProvider();

  const GoogleSignIn = () => {
    return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    });
  };

  const logOut = () => {
    signOut(auth)
      .then(() => {
        setUser();
      })
      .catch((error) => setError(error.message));
  };

  //   observe whether user auth state changed or not
  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) {
        getIdToken(user).then((idToken) => localStorage.setItem("Token", idToken));
        setUser(user);
      }
      setIsLoading(false);
    });
    return unsubscribe;
  }, [auth]);

  return {
    user,
    error,
    logOut,
    GoogleSignIn,
    isLoading,
    setIsLoading,
  };
};

export default useFirebase;
