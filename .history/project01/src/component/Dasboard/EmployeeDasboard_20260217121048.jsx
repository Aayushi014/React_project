import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'
const EmployeeDasboard = ({dt}) => {
  return (
    <div className='p-10 h-screen'>
      <Header/>
      <TaskNumber/>
      <Tasklist/>
    </div>
  )
}

export default EmployeeDasboard
