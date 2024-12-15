import { createUserWithEmailAndPassword, onAuthStateChanged, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import { auth } from "../Firebase/firebase.config";
import { signInWithEmailAndPassword } from "firebase/auth";

// eslint-disable-next-line react-refresh/only-export-components
export const AuthContext = createContext();

// eslint-disable-next-line react/prop-types
const AuthProvider = ({ children }) => {

    const [user, setUser] = useState(null);
    const [loading ,setLoading]=useState(true)
    
    const createUser = (email,password) => {
       return createUserWithEmailAndPassword(auth,email,password)
    }

    const signInUser = (email, password) => {
        return signInWithEmailAndPassword(auth, email, password)
    }

    const logOutUser = () => {
        return signOut(auth)
    }

    const authInfo = {
        createUser,
        signInUser,
        user,
        setUser,
        logOutUser,
        setLoading,
        loading,
    }

    useEffect(() => {
        const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
            setUser(currentUser)
            setLoading(false)
        })

        return () => {
            unsubscribe()
        }
    })


    return (
        <AuthContext.Provider value={authInfo}>
            {children}
      </AuthContext.Provider>
    );
};

export default AuthProvider;