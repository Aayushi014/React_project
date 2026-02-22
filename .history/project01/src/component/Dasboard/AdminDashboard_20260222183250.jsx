import React, { use, useState, useEffect } from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'
import TasksDisplay from '../other/TasksDisplay'
import { useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'
import { getLocalStorage } from '../../utils/localStorage'

const AdminDashboard = (props) => {
  const authData = useContext(AuthContext);
  const [taskData, setTaskData] = useState(authData);

  useEffect(() => {
    setTaskData(authData);
  }, [authData]);

  const handleTaskCreated = () => {
    const {employees, admin} = getLocalStorage();
    setTaskData({employees, admin});
  }

  // console.log(authData);
  return (
    <div className='h-screen w-full p-10'>
      <Header changeUser = {props.changeUser}/>
        <Createtask onTaskCreated={handleTaskCreated}/>
        <Alltask data = {taskData}/>
        <TasksDisplay data = {taskData} onTaskDeleted={handleTaskCreated}/>
    </div>
  )
}

export default AdminDashboard
