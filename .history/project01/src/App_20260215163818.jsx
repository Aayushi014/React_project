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
    if(email ===  && password === "123") {
      console.log("Admin logged in");
    }else if(email === "user@me.com" && password === "123") {
      console.log("User logged in");
    }else{
      console.log("Invalid credentials");
    }
  }
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>:""}
      {/* <EmployeeDasboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
