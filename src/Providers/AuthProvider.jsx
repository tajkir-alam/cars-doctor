import React, { createContext } from 'react';
import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from '../firebase/firebase.config';


const auth = getAuth(app);
export const AuthContext = createContext(null);
 

const AuthProvider = ({children}) => {

    const emailLogin = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const googleLogin = (email, password) => {
        return 
    }

    const authInfo = {
        emailLogin,
    }

    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};

export default AuthProvider;