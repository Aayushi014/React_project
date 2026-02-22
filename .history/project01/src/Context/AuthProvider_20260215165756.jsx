import React from 'react'
export const AuthContext = React.createContext();
const AuthProvider = ({children}) => {
  return (
    <div>
      {children}
    </div>
  )
}

export default AuthProvider
