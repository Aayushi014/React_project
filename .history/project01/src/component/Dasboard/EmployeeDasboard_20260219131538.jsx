import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'
const EmployeeDasboard = ({data},) => {
  return (
    <div className='p-10 h-screen'>
      <Header data={data}/>
      <TaskNumber data={data}/>
      <Tasklist data={data}/>
    </div>
  )
}

export default EmployeeDasboard
