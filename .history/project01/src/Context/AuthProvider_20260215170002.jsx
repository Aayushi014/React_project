import React from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
  return (
    <div>
      
      <AuthContext.Provider value={"Aayushi"}>
        
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
