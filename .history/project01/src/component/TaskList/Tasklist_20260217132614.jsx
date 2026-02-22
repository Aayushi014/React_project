import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'

const Tasklist = ({data}) => {
  return (
    <div id="tasklist" className=' w-full h-[55%] flex justify-start flex-nowrap overflow-x-auto  gap-5 mt-10 py-5 text-black'>
      <AcceptTask data = {data}/>
      <NewTask/>
      <Com
       <div className = "shrink-0 bg-red-200 w-75 h-full rounded-lg overflow-hidden p-4">
        <div className='flex justify-between items-center'>
           <h3 className='bg-yellow-600 px-2 rounded'>High</h3>
           <h4 className='text-sm'>13 feb 2025</h4>
        </div>
        <h3 className='text-xl mt-3 font-bold'>Make a youtube video</h3>
        <p className='text-sm'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Consequuntur pariatur cumque veritatis similique est doloribus!</p>
      </div>
    </div>
  )
}

export default Tasklist
