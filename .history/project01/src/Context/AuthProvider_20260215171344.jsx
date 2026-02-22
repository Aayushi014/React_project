import React, { useEffect, useState } from 'react'
import { getLocalStorage } from '../utils/localStorage';
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const [userData, setUserData] = useState(null);
    useEffect(() => {
        const {employees, admin} = getLocalStorage(;)
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
