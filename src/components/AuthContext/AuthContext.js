import React,{createContext,useState,useEffect, useContext} from 'react';
import auth from "../../firebase";
import {
  createUserWithEmailAndPassword,
  onAuthStateChanged,
  sendPasswordResetEmail,
  signInWithEmailAndPassword,
  setPersistence,
  browserSessionPersistence,
  browserLocalPersistence,
  updateEmail,
  updatePassword,
  signOut,
} from "firebase/auth";



const AuthContext = createContext();

const AuthProvider = ({children}) => {
    const [currentUser,setCurrentUser]=useState(); 

    const resetPassword=(email)=>{
    return sendPasswordResetEmail(auth,email);
    }

    const signup=(email)=>{
       return createUserWithEmailAndPassword(auth,email,'password');
    }

    const signIn=(email,password)=>{
    return signInWithEmailAndPassword(auth,email,password) ;
    }

    const updateUserEmail=(email)=>{
      return updateEmail(auth.currentUser,email);
    }

    const updateUserPassword=(password)=>{
      return updatePassword(auth.currentUser,password);
    }

    const setPersistenceValue=(type)=>{
      if(type ==='LOCAL')
      setPersistence(auth, browserLocalPersistence);
      else{
       setPersistence( auth, browserSessionPersistence);
      }
    }

    const logout=()=>{
      return signOut(auth);
    }

    useEffect(()=>{
       const unsubscribe= onAuthStateChanged(auth,(user)=>{
            setCurrentUser(user);  
        });
        return()=>{
            unsubscribe();
        };
    },[]);
    
  return (
    <AuthContext.Provider value={{currentUser,signup,signIn,logout,resetPassword,setPersistenceValue,updateUserEmail,updateUserPassword}}>
        {children}
    </AuthContext.Provider>
  );
}
export default AuthProvider;

export const useAuth = ()=>{
    return useContext(AuthContext);
}
