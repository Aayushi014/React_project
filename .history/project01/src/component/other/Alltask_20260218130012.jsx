import React from 'react'

const Alltask = ({data}) => {
  return (
    <div id = "alltask" className = " py-10 w-[50%] h-screen overflow-auto">
      <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between'>
         <h2>Employee Name</h2>
         <h3>New Task</h3>
         <h5>Active</h5>
         <h5>Completed</h5>
         <h5>Failed</h5>
      </div>
     <div>
        {data.employees.map(function(elem){
            return <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between'>
         </h2>
         <h3>Make a UI Design</h3>
         <h5>Status</h5>
         <h5>Status</h5>
         <h5>Status</h5>
      </div>
        })}
     </div>
    </div>
  )
}

export default Alltask
