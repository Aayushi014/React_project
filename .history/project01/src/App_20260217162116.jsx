import { use, useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'
import { setLocalStorage } from './utils/localStorage'
const App = () => {
const [user, setUser] = useState(null);
const authData = useContext(AuthContext)
const [loggedInUserData, setLoggedInUserData] = useState(null);
 
const handleLogin = (email,password) => {
  if(email === 'admin@example.com' && password === '123') {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({role: "admin"}));
  }else if(authData){
    const employee = authData.employees.find(emp => emp.email === email && emp.password === password);
    if(employee){
      setUser("employee");
      console.log(employee);
      setLoggedInUserData(employee);
      localStorage.setItem("loggedInUser", JSON.stringify({role: "employee"}));
    }else{
        alert("Invalid credentials");
    }
  }
}
 
  return (
    <div>
      {!user ? <Login handleLogin={handleLogin}/>:""}
      {user === "admin" ? <AdminDashboard/> : user === "employee" ? <EmployeeDasboard data={loggedInUserData}/> : null}
    </div>
  )
}

export default App
