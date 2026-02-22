import React from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <Createtask/>
      
    </div>
  )
}

export default AdminDashboard
