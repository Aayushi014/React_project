import React, { use, useEffect } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'

const App = () => {
  useEffect(() => {
    const storedEmployees = localStorage.getItem('employees');
    if (!storedEmployees) { 
  return (
    <div>
      <Login/>
      {/* <EmployeeDasboard/> */}
      {/* <AdminDashboard/> */}
    </div>
  )
}

export default App
