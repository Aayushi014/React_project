import React, { use, useEffect } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'
import { getLocalStorage, setLocalStorage } from './utils/localStorage'

const App = () => {
  // useEffect(() => {
  //   // setLocalStorage();
  //    getLocalStorage();
  // },)
  useS
  return (
    <div>
      <Login/>
      {/* <EmployeeDasboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
