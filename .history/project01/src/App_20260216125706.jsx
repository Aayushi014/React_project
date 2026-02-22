import { useContext, useEffect, useState } from 'react'
import Login from './component/Auth/Login'
import EmployeeDasboard from './component/Dasboard/EmployeeDasboard'
import AdminDashboard from './component/Dasboard/AdminDashboard'
import { AuthContext } from './Context/AuthProvider'
const App = () => {
  const [user, setUser] = useState(null);
  const authData = useContext(AuthContext)
  
  useEffect(() => {
    const loggedInUser = localStorage.getItem("loggedInUser");
    if (loggedInUser) {
      setUser(loggedInUser.role);
    }
  }, [authData])
  const handleLogin = (email,password) => {
    if(authData && authData.admin.find((emp)=> emp.email === email && emp.password === password)) {
      setUser("admin");
      localStorage.setItem("loggedInUser", JSON.stringify({email, role: "admin"}));
    }else if(authData && authData.employees.find((emp)=> emp.email === email && emp.password === password)){
      setUser("employees");
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
