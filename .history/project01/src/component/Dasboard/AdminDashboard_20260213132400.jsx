import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div>
          <form>
            <h3>Task title</h3>
            <input type="text" placeholder="Enter task title" className="border border-gray-300 rounded px-3 py-2 w-full"/>
          </form>
      </div>

    </div>
  )
}

export default AdminDashboard
