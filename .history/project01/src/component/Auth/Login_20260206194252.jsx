import React from 'react'
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { UserRound } from 'lucide-react';
const Login = () => {
  const submitHandler = (e) =>{
     e.preventDefault()
  }
  return (
    <div className = 'flex h-screen w-screen justify-center items-center'>
      <div className='rounded border-2 p-20 border-emerald-600'>
        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
          <UserRound className='size-'/>
          <div className = 'relative w-full'>
            <Mail className='absolute left-3 pr-0.5 top-1/2 -translate-y-1/2 text-emerald-600'/>
            <input required className = 'rounded border-2 border-emerald-600 p-2 pl-10' type = 'email' placeholder = 'Enter email'/>
          </div>
          <div className='relative w-full'>
            <Lock className='absolute left-3 pr-0.5 top-1/2 -translate-y-1/2 text-emerald-600'/>
            <input required className = 'rounded mt-2 border-2 pl-10 border-emerald-600 p-2' type = 'password' placeholder = 'Enter password'/>
          </div>
          <button className = "bg-emerald-600 mt-2 p-1 rounded w-full active:scale-90 cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

