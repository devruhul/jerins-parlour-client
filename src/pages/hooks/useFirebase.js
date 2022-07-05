import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import initializeFirebase from "../Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [parlourUser, setParlourUser] = useState({});
    const [loading, setLoading] = useState(true);
    // const [admin, setAdmin] = useState(false)
    // const [authToken, setAuthToken] = useState('');
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

    let navigate = useNavigate()
    const auth = getAuth();

    const signInWithGoogle = (location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                // The signed-in user info.
                const user = result.user;
                setParlourUser(user);
                let destination = location?.state?.from || "/"
                navigate(destination)
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

    const createParlourUser = (email, password, name) => {
        setLoading(true);
        createUserWithEmailAndPassword(auth, email, password)
            .then((result) => {
                const newUser = result.user;
                setParlourUser(newUser);
                navigate('/')
                setError('')
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));

    }
    const signInParlourUser = (email, password, location) => {
        setLoading(true);
        signInWithEmailAndPassword(auth, email, password)
            .then((userCredential) => {
                let destination = location?.state?.from || "/"
                navigate(destination);
                setParlourUser(userCredential.user);
                setError('');
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    useEffect(() => {
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setParlourUser(user);
            } else {
                setParlourUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);


    const parlourUserlogout = () => {
        signOut(auth)
            .then(() => {
                setParlourUser({});
            })
            .catch((error) => {
                const errorMessage = error.message;
                setError(errorMessage);
            })
            .finally(() => setLoading(false));
    }

    return {
        signInWithGoogle,
        // signInWithFacebook,
        createParlourUser,
        signInParlourUser,
        parlourUser,
        parlourUserlogout,
        error,
        loading
    }
};

export default useFirebase;