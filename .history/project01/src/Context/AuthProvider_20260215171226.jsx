import React from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
    const [user]
  return (
    <div>
      <AuthContext.Provider value={"Aayushi"}>
        {children}
      </AuthContext.Provider>
    </div>
  )
}

export default AuthProvider
