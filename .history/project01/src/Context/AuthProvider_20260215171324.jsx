import React, { useEffect, useState } from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const {em}
    },[])
  return (
    <div>
      <AuthContext.Provider value={"Aayushi"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
