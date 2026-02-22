import React from 'react'

const Alltask = ({data}) => {
  return (
    <div id = "alltask" className = " py-10 w-full h-screen">
      <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between'>
         <h2 className='w-1/5'>Employee Name</h2>
         <h3 className='w-1/5'>New Task</h3>
         <h5 className='w-1/5'>Active</h5>
         <h5 className='w-1/5'>Completed</h5>
         <h5 className='w-1/5'>Failed</h5>
      </div>
     <div>
        {data.employees.map(function(elem){
            return <div className='bg-red-400 mb-2 py-2 px-4 rounded flex justify-between'>
         <h2 className='w-1/5'>{elem.firstName}</h2>
         <h3 className='w-1/5'>{elem.taskNumbers.newTask}</h3>
         <h5 className='w-1/5'>{elem.taskNumbers.active}</h5>
         <h5 className='w-1/5'>{elem.taskNumbers.completed}</h5>
         <h5 className='w-1/5'>{elem.taskNumbers.failed}</h5>
      </div>
        })}
     </div>
    </div>
  )
}

export default Alltask
