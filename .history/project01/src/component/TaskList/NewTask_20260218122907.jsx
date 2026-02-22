import React from 'react'

const NewTask = ({data}) => {
  return (
    <div className = "shrink-0 bg-red-200 w-75 h-full rounded-lg overflow-hidden p-4 flex flex-col justify-between">
        <div>
           <div className='flex justify-between items-center'>
             <h3 className='bg-yellow-600 px-2 rounded'>{data.category}</h3>
             <h4 className='text-sm'>{data.taskDate}</h4>
           </div>
         <div>
            <h3 className='text-xl mt-3 font-bold'>{data.taskTitle}</h3>
            <p className='text-sm'>{data.taskDescription}</p> 
         </div>
       </div>
        <div>
            <button className = "bg-red-400 rounded w-full active:scale-90 cursor-pointer">Failed</button>
        </div>
    </div>
  )
}

export default NewTask
