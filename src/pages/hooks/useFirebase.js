import { getAuth, signInWithPopup, GoogleAuthProvider, FacebookAuthProvider } from "firebase/auth";
import { useState } from "react";
import initializeFirebase from "../Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [parlourUser, setParlourUser] = useState({});
    const [error, setError] = useState("");
    const googleProvider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

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

    // const signInWithFacebook = () => {
    //     signInWithPopup(auth, facebookProvider)
    //         .then((result) => {
    //             // The signed-in user info.
    //             const user = result.user;
    //             setParlourUser(user);
    //             console.log(user);
    //         }).catch((error) => {
    //             // Handle Errors here.
    //             const errorCode = error.code;
    //             const errorMessage = error.message;
    //             setError(errorCode, errorMessage);
    //         });
    // }

    return {
        signInWithGoogle,
        // signInWithFacebook,
        parlourUser,
        error
    }
};

export default useFirebase;