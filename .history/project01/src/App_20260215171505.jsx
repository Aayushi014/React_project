import React, { use, useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'
 const authData = useContext(AuthContext)
  console.log(data)

const App = () => {
  const [user, setUser] = useState(null);
  const handleLogin = (email,password) => {
    if(email === "admin@example.com" && password === "123") {
      setUser("admin");
    }else if(email === "employee@example.com" && password === "123") {
      setUser("employee");
    }else{
      alert("Invalid credentials");
    }
  }
 
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>:""}
      {user === "admin" ? <AdminDashboard/>:<EmployeeDasboard/>}
    </div>
  )
}

export default App
