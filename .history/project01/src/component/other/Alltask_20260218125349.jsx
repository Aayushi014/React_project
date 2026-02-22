import React from 'react'

const Alltask = ({data}) => {
  return (
    <div id = "alltask" className = " py-10 w-[50%] h-screen overflow-auto">
      <div className='bg-red-400 mb-2 py-2 px-4 rounded'>
         <h2>Aayushi</h2>
         <h3>Make a UI Design</h3>
         <h5>Status</h5>
      </div>
      {data.employees.map()}
    </div>
  )
}

export default Alltask
