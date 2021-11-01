import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut } from "firebase/auth";
import initializeAuthentication from "../../Firebase/Firebase.init";

initializeAuthentication();

const useFirebase = () => {
  const [user, setUser] = useState({});
  const [error, setError] = useState("");
  const auth = getAuth();

  const GoogleSignIn = () => {
    const googleProvider = new GoogleAuthProvider();
    signInWithPopup(auth, googleProvider).then((result) => {
      const user = result.user;
      setUser(user);
    });
    /*  return signInWithPopup(auth, googleProvider).catch((error) => {
      setError(error.message);
    }); */
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
        setUser(user);
      }
    });
    return unsubscribe;
  }, [auth]);

  return {
    user,
    error,
    logOut,
    GoogleSignIn,
  };
};

export default useFirebase;
