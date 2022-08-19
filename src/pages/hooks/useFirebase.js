import { useEffect, useState } from "react";
import { getAuth, signInWithPopup, GoogleAuthProvider, onAuthStateChanged, signOut, createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile, getIdToken } from "firebase/auth";
import { useNavigate } from "react-router-dom";
import initializeFirebase from "../Authentication/Firebase/firebase.init";

initializeFirebase();

const useFirebase = () => {
    const [parlourUser, setParlourUser] = useState({});
    const [loading, setLoading] = useState(true);
    const [admin, setAdmin] = useState(false)
    const [authToken, setAuthToken] = useState('');
    const [error, setError] = useState("");

    const googleProvider = new GoogleAuthProvider();
    // const facebookProvider = new FacebookAuthProvider();

    let navigate = useNavigate()
    const auth = getAuth();

    const signInWithGoogle = (location) => {
        signInWithPopup(auth, googleProvider)
            .then((result) => {
                let destination = location?.state?.from || "/"
                navigate(destination)
                // The signed-in user info.
                const user = result.user;
                saveParlourUser(user.email, user.displayName, 'PUT')
                setParlourUser(user);
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
                const newUser = { email, displayName: name }
                setParlourUser(newUser);
                navigate('/')
                setError('')
                saveParlourUser(email, name, 'POST')
                updateProfile(auth.currentUser, {
                    displayName: name
                }).then(() => {
                }).catch((error) => {
                });
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
                getIdToken(user)
                    .then((idToken) => {
                        setAuthToken(idToken)
                    })
            } else {
                setParlourUser({});
            }
            setLoading(false)
        });

        return () => unsubscribed

    }, [auth]);

    // // check if user is admin or not
    useEffect(() => {
        fetch(`http://localhost:5000/users/${parlourUser?.email}`)
            .then(res => res.json())
            .then(data => {
                setAdmin(data.admin)
            })
    }, [parlourUser.email])


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

    const saveParlourUser = (email, displayName, method) => {
        const user = { email, displayName }
        fetch('http://localhost:5000/users', {
            method: method,
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(user)
        })
            .then(res => res.json())
            .then(data => {
            })
    }

    return {
        signInWithGoogle,
        // signInWithFacebook,
        createParlourUser,
        signInParlourUser,
        parlourUser,
        parlourUserlogout,
        authToken,
        admin,
        error,
        loading
    }
};

export default useFirebase;