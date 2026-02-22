import React, { useState } from 'react'

const Header = ({data}) => {
const[userName, setUserName] = useState(null);
if(!data){
  setUserName("Admin");
}else{
  setUserName(data.firstName);
}
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl'>Hello <br/><span className='text-emerald-600 font-bold'>{user} 🖐️</span></h1>
      <button className='bg-emerald-600 text-white px-4 py-1 rounded'>Logout</button>
    </div>
  )
}

export default Header
