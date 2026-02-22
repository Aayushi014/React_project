import React from 'react'

const Tasklist = () => {
  return (
    <div id="tasklist" className=' w-full h-[55%] flex justify-start flex-nowrap overflow-x-auto  gap-5 mt-10 py-5'>
       <div className = "shrink-0 bg-yellow-200 w-75 h-full rounded-lg over">
        <div className='text-black'>
           <h3 className='bg-yellow-600'>High</h3>
           <h4>13 feb 2025</h4>
        </div>

       </div>
      
    </div>
  )
}

export default Tasklist
