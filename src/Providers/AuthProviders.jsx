
import React, { createContext, useEffect, useState } from 'react';
import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword, onAuthStateChanged, signOut, GoogleAuthProvider, signInWithPopup, GithubAuthProvider, updateProfile } from "firebase/auth";
import app from '../firebase/firebase.config';

export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProviders = ({ children }) => {

    const [user, setUser] = useState(null);
    const [error, setError] = useState(null);
    const [loading, setLoading] = useState(true);
    // handle google directly
    const handleGoogle = () => {
        setLoading(true)
        const googleProvider = new GoogleAuthProvider();
        signInWithPopup(auth, googleProvider)
            .then(res => {
                const loggedUser = res.user;
                setUser(loggedUser);
            })
            .catch(e => {
                setError(e.message);
                console.log(e.message);
            })
    }
    // using github directly 
    const HandleGithub = () => {
        setLoading(true)
        const githubProvider = new GithubAuthProvider();
        signInWithPopup(auth, githubProvider)
            .then(res => {
                const loggedUser = res.user;
                console.log(loggedUser);
                setUser(loggedUser)
            })
            .catch(e => {
                setError(e.message)
                console.log(e.message);
            })
    }
    // create user with mail and pass
    const createUser = (email, password) => {
        setLoading(true)
        return createUserWithEmailAndPassword(auth, email, password)
    }
    // logged in user
    const loginUser = (email, password) => {
        setLoading(true)
        return signInWithEmailAndPassword(auth, email, password)
    }
    // logout
    const logOut = () => {
        setLoading(true)
        return signOut(auth)

    }
    // update user data
    const updateUserData = (user, name, photo) => {
        setLoading(true);
        return updateProfile(auth.currentUser, {
            displayName: name,
            photoURL: photo,
        })
    }


    // unsubcriber
    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (loggedUser) => {
            console.log(loggedUser)
            setUser(loggedUser)
            setLoading(false)
        })

        return () => unsubscribe();
    })

    const info = {
        user,
        createUser,
        loginUser,
        logOut,
        handleGoogle,
        HandleGithub,
        loading,
        updateUserData

    }
    return (
        <AuthContext.Provider value={info}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProviders;