import React from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
  return (
    <div>
      {children}
      <AuthContext
    </div>
  )
}

export default AuthProvider
