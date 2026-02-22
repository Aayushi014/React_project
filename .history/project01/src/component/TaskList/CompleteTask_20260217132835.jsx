import React from 'react'

const CompleteTask = () => {
  return (
    <div>
    <div className = "shrink-0 bg-green-200 w-75 h-full rounded-lg overflow-hidden p-4">
        <div className='flex justify-between items-center'>
           <h3 className='bg-yellow-600 px-2 rounded'>High</h3>
           <h4 className='text-sm'>13 feb 2025</h4>
        </div>
        <h3 className='text-xl mt-3 font-bold'>Make a youtube video</h3>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur pariatur cumque veritatis similique est doloribus!</p>
        <div>
            <button className = "bg-emerald-500 rounded w-full active:scale-90 cursor-pointer">Completed</button>
        </div>
    </div>
    
  )
}

export default CompleteTask
