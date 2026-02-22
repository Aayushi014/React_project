import React from 'react'

const AcceptTask = () => {
  return (
    <div className = "shrink-0 bg-blue-200 w-75 h-full rounded-lg overflow-hidden p-4">
        <div className='flex justify-between items-center'>
           <h3 className='bg-yellow-600 px-2 rounded'>High</h3>
           <h4 className='text-sm'>{data.tasks[0].taskDate}</h4>
        </div>
        <h3 className='text-xl mt-3 font-bold'>{data.tasks[0].taskTitle}</h3>
        <p className='text-sm'>{data.tasks[0].taskDescription}</p>
        
      </div>
  )
}

export default AcceptTask
