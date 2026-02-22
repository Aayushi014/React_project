import React from 'react'

const Createtask = () => {
  return (
      <div className='mt-5 p-5'>
          <form className='flex flex-wrap w-full items-start justify-between'>
            <div className='w-1/2'>
              <div>
                <h3>Task title</h3>
                <input type="text" placeholder="Enter task title" className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5"/>
              </div>
              <div>
                <h3>Date</h3>
                <input type="date" className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5
                scheme-dark"/>
              </div>
              <div>
                <h3>Assign to</h3>
                <input type = "text" placeholder='employee name' className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5"/>
              </div>
              <div>
                <h3>Category</h3>
              <input type = "text" placeholder='design/dev/other' className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5"/>
              </div>
            </div>
            <div className='w-2/2'>
               <h3>Task description</h3>
               <textarea rows = "10" placeholder="Enter task description" className="border my-2 border-gray-300 rounded px-3 py-2 w-full h-44"/>
               <button className="bg-emerald-600 mt-2 rounded active:scale-90 p-2 cursor-pointer">Create Task</button> 
            </div>
          </form>
      </div>
  )
}

export default Createtask
