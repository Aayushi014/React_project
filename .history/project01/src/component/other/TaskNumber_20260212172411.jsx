import React from 'react'

const TaskNumber = () => {
  return (
    <div className='flex justify-between gap-5 mt-10'>
        <div className='bg-emerald-200 px-4 py-2 rounded h-40 w-1/2 text-black py-6 px-10'>
           <h1 className='font-bold text-3xl'>0</h1>
           <h1 className='font-bold text-3xl'>New Tasks</h1>
        </div>
    </div>
  )
}

export default TaskNumber
