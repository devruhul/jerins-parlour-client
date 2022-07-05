import { getAuth, signInWithPopup, GoogleAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [parlourUser, setParlourUser] = useState({});
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    const auth = getAuth();

    const signInWithGoogle = () => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setParlourUser(user);
                console.log(user);
            }).catch((error) => {
                // Handle Errors here.
                const errorCode = error.code;
                const errorMessage = error.message;
                setError(errorCode, errorMessage);
            });
    }

    return {
        signInWithGoogle,
        parlourUser,
        error
    }
};

export default useFirebase;