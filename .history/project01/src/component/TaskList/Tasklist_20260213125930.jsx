import React from 'react'

const Tasklist = () => {
  return (
    <div id="tasklist" className=' w-full h-[55%] flex justify-start flex-nowrap overflow-x-auto  gap-5 mt-10 py-5 text-black'>
       <div className = "shrink-0 bg-yellow-200 w-75 h-full rounded-lg overflow-hidden p-4">
        <div className='flex justify-between items-center'>
           <h3 className='bg-yellow-600 px-2 rounded'>High</h3>
           <h4>13 feb 2025</h4>
        </div>
        <h3>Make a youtube video</h3>
        <p>lorem15</p>

       </div>
      
    </div>
  )
}

export default Tasklist
