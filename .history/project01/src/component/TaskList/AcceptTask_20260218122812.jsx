import React from 'react'

const AcceptTask = ({data}) => {
  console.log(data);
  return (
     <div className = "shrink-0 bg-blue-200 w-75 h-full rounded-lg overflow-hidden p-4 flex flex-col justify-between">
        <div>
           <div className='flex justify-between items-center'>
             <h3 className='bg-yellow-600 px-2 rounded'>{}</h3>
             <h4 className='text-sm'>{data.taskDate}</h4>
           </div>
         <div>
            <h3 className='text-xl mt-3 font-bold'>{data.taskTitle}</h3>
            <p className='text-sm'>{data.taskDescription}</p> 
         </div>
       </div>
        <div className='flex gap-1'> 
            <button className = "bg-red-500 rounded w-full active:scale-90 cursor-pointer">Mark as Completed</button>
            <button className = "bg-blue-500 rounded w-full active:scale-90 cursor-pointer">Mark as Rejected</button>
        </div>
    </div>
  )
}

export default AcceptTask
