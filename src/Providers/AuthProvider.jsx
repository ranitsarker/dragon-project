import { createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signOut } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firbase.config";
export const AuthContext = createContext(null);
const auth = getAuth(app);
const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);
    // create user
    const createUser = (email, password) =>{
        setLoading(true);
        return createUserWithEmailAndPassword(auth, email, password)
    }

    // login
    const LoginUser = (email, password) =>{
        setLoading(true);
        return signInWithEmailAndPassword(auth, email, password)
    }

        // logout:
        const logOut = () => {
            setLoading(true);
            return signOut(auth);
        }
    // set user to context
    // useEffect( () => {
    //     onAuthStateChanged(auth, currentUser => {
    //         console.log('user in the auth state change.', currentUser)
    //         setUser(currentUser);
    //     })
    // }, [])

    useEffect( () => {
        const unSubscribe = onAuthStateChanged(auth, currentUser => {
            console.log('user in the auth state change.', currentUser)
            setUser(currentUser);
            setLoading(false);
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        loading,
        createUser,
        LoginUser,
        logOut,

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;