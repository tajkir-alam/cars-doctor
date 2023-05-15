import React, { createContext } from 'react';
import { GoogleAuthProvider, getAuth, signInWithEmailAndPassword, signInWithPopup } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
const googlePorvider = new GoogleAuthProvider();

const AuthProvider = ({children}) => {

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = () => {
        return signInWithPopup(auth, googlePorvider);
    }

    const authInfo = {
        emailLogin,
        googleLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;