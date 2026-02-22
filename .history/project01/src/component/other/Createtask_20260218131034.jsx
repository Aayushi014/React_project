import React from 'react'

const Createtask = () => {
  return (
      <div className='mt-5'>
          <form className='flex flex-wrap w-full items-start justify-between'>
            <div>
              <h3>Task title</h3>
              <input type="text" placeholder="Enter task title" className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
              <h3>Date</h3>
              <input type="date" className="border my-2 border-gray-300 rounded px-3 py-2 w-full
             scheme-dark"/>
              <h3>Assign to</h3>
              <input type = "text" placeholder='employee name' className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
              <h3>Category</h3>
              <input type = "text" placeholder='design/dev/other' className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
            </div>
           
            <div>
               <h3>Task description</h3>
               <textarea rows = "10" placeholder="Enter task description" className="border my-2 border-gray-300 rounded px-3 py-2 w-full"/>
               <div className='flex justify-center'>
               <button className="bg-emerald-600 mt-2 rounded active:scale-90 p-2 cursor-pointer">Create Task</button> 
            </div>
            </div>
          </form>
      </div>
  )
}

export default Createtask
