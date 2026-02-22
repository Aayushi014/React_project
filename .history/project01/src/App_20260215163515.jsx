import React, { use, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //    getLocalStorage();
  // },)
  const [user, setUser] = useState(null);
  const handleLogin = (email,password) => {
    if(email === "admin@example.com" && password === "123") {
      console.log("Admin logged in");
    }else if(email === "user@
  }
  return (
    <div>
      {!user ? <Login/>:""}
      {/* <EmployeeDasboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
