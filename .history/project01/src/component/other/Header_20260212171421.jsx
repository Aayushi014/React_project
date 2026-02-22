import React from 'react'

const Header = () => {
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl font-bold'>Hello <br/><span className='text-emerald-600'>Aayushi 🖐️</span></h1>
      <button className='bg-emerald-600 text-white px-4 py-1 rounded'>Logout</button>
    </div>
  )
}

export default Header
