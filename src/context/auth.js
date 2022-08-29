import { onAuthStateChanged } from "firebase/auth";
import { useEffect } from "react";
import { useState } from "react";
import { createContext } from "react";
import Loading from "../components/loading";
import { auth } from "../firebase/config";

export const AuthContext = createContext();

const AuthProvider = ({ children }) => {
    const [user,setUser]=useState(null);
    const [loading, setLoading] = useState(true);
    useEffect(()=>{
        onAuthStateChanged(auth,(user)=>{
            setUser(user);
            setLoading(false);
        })
    },[]);
    if (loading) {
        return <Loading />;
      }

  return <AuthContext.Provider value={{user}}>{children}</AuthContext.Provider>;
};

export default AuthProvider;
