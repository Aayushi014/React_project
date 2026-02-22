import React from 'react'
import Header from '../other/Header'

const AdminDashboard = () => {
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div className='mt-2'>
          <form>
            <h3>Task title</h3>
            <input type="text" placeholder="Enter task title" className="border my-2 border-gray-300 rounded px-3 py-2 w-full lg:w-"/>
            <h3>Task description</h3>
            <textarea rows = "10" placeholder="Enter task description" className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
            <h3>Date</h3>
            <input type="date" className="border my-2 border-gray-300 rounded px-3 py-2 w-full
             scheme-dark"/>
            <h3>Assign to</h3>
            <input type = "text" placeholder='employee name' className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
            <h3>Category</h3>
            <input type = "text" placeholder='design/dev/other' className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
            <button className="bg-emerald-600 mt-2 p-1 rounded w-full active:scale-90 cursor-pointer">Create Task</button>
          </form>
      </div>

    </div>
  )
}

export default AdminDashboard
