import React, { useState } from 'react'

const Header = ({data}) => {
const[userName, setUserName] = useState(null);
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl'>Hello <br/><span className='text-emerald-600 font-bold'>{data.firstName} 🖐️</span></h1>
      <button className='bg-emerald-600 text-white px-4 py-1 rounded'>Logout</button>
    </div>
  )
}

export default Header
