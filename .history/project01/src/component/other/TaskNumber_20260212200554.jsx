import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex items-center justify-between gap-5 mt-10'>
        <div className='bg-emerald-200 rounded w-[45%] text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>0</h1>
           <h1 className='text-xl whitespace-nowrap'>New Tasks</h1>
        </div>
         <div className='bg-emerald-200 rounded  text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>0</h1>
           <h1 className=' text-xl'>Completed</h1>
        </div>
        <div className='bg-emerald-200 rounded w-1/2 text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>0</h1>
           <h1 className=' text-xl'>Accepted</h1>
        </div>
         <div className='bg-emerald-200 rounded w-1/2 text-black py-6 px-6'>
           <h1 className='font-bold text-3xl'>0</h1>
           <h1 className=' text-xl'>Failed</h1>
        </div>
    </div>
  )
}

export default TaskNumber
