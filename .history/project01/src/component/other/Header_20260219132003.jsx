import React, { useState,useEffect } from 'react'

const Header = (props) => {
const[userName, setUserName] = useState(null);
  useEffect(() => {
    const data = props.data;
    if (!data) {
      setUserName("Admin");
    } else {
      setUserName(data.firstName);
    }
  }, [props.data]);
  const logOutUser = () => {
    localStorage.setItem("loggedInUser","");
    props.changeUser('');
    // window.location.reload();
  }
  return (
    <div className='flex justify-between items-center'>
      <h1 className='text-xl'>Hello <br/><span className='text-emerald-600 font-bold'>{userName} 🖐️</span></h1>
      <button onClick = {logOutUser} className='bg-emerald-600 text-white px-4 py-1 rounded'>Logout</button>
    </div>
  )
}

export default Header
