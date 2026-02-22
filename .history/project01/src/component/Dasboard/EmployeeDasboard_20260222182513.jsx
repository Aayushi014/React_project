import React, { useEffect, useState } from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'
import { getLocalStorage } from '../../utils/localStorage'

const EmployeeDasboard = (props) => {
  const [employeeData, setEmployeeData] = useState(props.data);

  useEffect(() => {
    setEmployeeData(props.data);
  }, [props.data]);

  // Refresh employee data every 3 seconds to check for new tasks
  useEffect(() => {
    const interval = setInterval(() => {
      const loggedInUser = localStorage.getItem("loggedInUser");
      if(loggedInUser) {
        const userData = JSON.parse(loggedInUser);
        if(userData.data && userData.data.id) {
          const {employees} = getLocalStorage();
          const updatedEmployee = employees.find(emp => emp.id === userData.data.id);
          if(updatedEmployee) {
            setEmployeeData(updatedEmployee);
          }
        }
      }
    }, 3000); // Refresh every 3 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className='p-10 h-screen'>
      <Header data={employeeData} changeUser = {props.changeUser}/>
      <TaskNumber data={employeeData}/>
      <Tasklist data={employeeData}/>
    </div>
  )
}

export default EmployeeDasboard
