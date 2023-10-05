import { GithubAuthProvider, GoogleAuthProvider, createUserWithEmailAndPassword, getAuth, onAuthStateChanged, signInWithEmailAndPassword, signInWithPopup, signOut, updateProfile } from "firebase/auth";
import { createContext, useEffect, useState } from "react";
import app from "../Firebase/Firbase.config";

export const AuthContext = createContext(null);
const auth = getAuth(app);
const googleProvider = new GoogleAuthProvider();
const gitHubProvider = new GithubAuthProvider();

const AuthProvider = ({children}) => {
    const [user, setUser] = useState(null);
    const [loading, setLoading] = useState(true);

    // google login
    const googleLogin = () => {
        setLoading(true);
       return signInWithPopup(auth, googleProvider);
    }
    // github login
    const githubLogin = () => {
        setLoading(true);
        return signInWithPopup(auth, gitHubProvider);
     }
 
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
    // update profile 
    const handleUpdateProfile = (name, photo) => {
        return updateProfile(auth.currentUser, {
            displayName: name, photoURL: photo
          })
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
            setLoading(false)
        });
        return () =>{
            unSubscribe();
        }
    }, [])

    const authInfo = {
        user,
        googleLogin,
        githubLogin,
        loading,
        createUser,
        LoginUser,
        handleUpdateProfile,
        logOut,

    };
    return (
        <AuthContext.Provider value={authInfo}>
            {children}
        </AuthContext.Provider>
    );
};
export default AuthProvider;