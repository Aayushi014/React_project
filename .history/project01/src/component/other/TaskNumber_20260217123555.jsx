import React from 'react'

const TaskNumber = ({data}) => {
  return (
    <div className='flex items-center justify-between gap-5 mt-10'>
        <div className='bg-emerald-200 rounded w-[45%] text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>{data.taskNumbers.newTask}</h1>
           <h1 className='text-xl whitespace-nowrap'>New Task</h1>
        </div>
         <div className='bg-emerald-200 rounded w-[45%]  text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>{data.taskNumbers.completed}</h1>
           <h1 className=' text-xl'>Completed</h1>
        </div>
        <div className='bg-emerald-200 rounded w-[45%] text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>{data.taskNumbers.active}</h1>
           <h1 className=' text-xl'>Active</h1>
        </div>
         <div className='bg-emerald-200 rounded w-[45%] text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'></h1>
           <h1 className=' text-xl'>Failed</h1>
        </div>
    </div>
  )
}

export default TaskNumber
