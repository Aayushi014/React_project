import React from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const [userDa]
  return (
    <div>
      <AuthContext.Provider value={"Aayushi"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
