import React, { useState,useEffect } from 'react'

const Header = ({data}) => {
const[userName, setUserName] = useState(null);
  useEffect(() => {
    if (!data) {
      setUserName("Admin");
    } else {
      setUserName(data.firstName);
    }
  }, [data]);
  const logOutUser = () => {
    localStorage.removeItem("loggedInUser");
    window.location.reload();
  }
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl'>Hello <br/><span className='text-emerald-600 font-bold'>{userName} 🖐️</span></h1>
      <button onClick = {logOutUser} className='bg-emerald-600 text-white px-4 py-1 rounded'>Logout</button>
    </div>
  )
}

export default Header
