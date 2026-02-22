import React from 'react'
import Header from '../other/Header'
import TaskNumber from '../other/TaskNumber'
import Tasklist from '../TaskList/Tasklist'
const EmployeeDasboard = (props) => {
  return (
    <div className='p-10 h-screen'>
      <Header data={props.data} changeUser = {props.changeUser}/>
      <TaskNumber data={props.data}/>
      <Tasklist data={props.data}/>
    </div>
  )
}

export default EmployeeDasboard
