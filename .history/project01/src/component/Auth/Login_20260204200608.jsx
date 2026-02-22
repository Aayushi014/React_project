import React from 'react'
import {Mail}
const Login = () => {
  return (
    <div className = 'flex h-screen w-screen justify-center items-center'>
      <div className='rounded border-2 p-20 border-emerald-600'>
        <form className='flex flex-col justify-center items-center'>
          <input required className = 'rounded border-2 border-emerald-600 p-2' type = 'email' placeholder = 'Enter email'/>
          <input required className = 'rounded mt-2 border-2 border-emerald-600 p-2' type = 'password' placeholder = 'Enter password'/>
          <button className = "bg-emerald-600 mt-2 p-1 rounded w-full active:scale-90 cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

