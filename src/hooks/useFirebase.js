import React from 'react';
import { getAuth, signInWithPopup, GoogleAuthProvider, signOut, onAuthStateChanged } from "firebase/auth";
import initializeAuthentication from '../pages/Login/Firebase/firebase.init';
import { useEffect } from 'react';
import { useState } from 'react';


initializeAuthentication();

const useFirebase = () => {
    const [error, setError] = useState('')
    const [user, setUser] = useState({});
    const [isLoading, setIsLoading] = useState(true);
    const [modalShow, setModalShow] = React.useState(false);

    const auth = getAuth();

    // google login 
    const signInUsingGoogle = () => {
        const googleProvider = new GoogleAuthProvider();
        return signInWithPopup(auth, googleProvider)
    };

    //// log out 
    const logOut = () => {
        signOut(auth)
            .then(() => {
                setUser({});
                setError('')
            })
            .catch(error => {
                setError(error.message);
            })
    };


    // firebase Observer
    useEffect(() => {
        setIsLoading(true);
        const unsubscribed = onAuthStateChanged(auth, (user) => {
            if (user) {
                setUser(user)
            }
            else {
                setUser({});
            }
            setIsLoading(false);
        });
        return () => unsubscribed;
    }, []);

    return { signInUsingGoogle, logOut, error, setError, user, setUser, isLoading, setIsLoading, modalShow, setModalShow }
};

export default useFirebase;