import React from 'react'
import { Mail } from 'lucide-react';
import { Lock } from 'lucide-react';
import { useState } from 'react';
const Login = () => {
  const[email,setEmail] = useState('')
  const[password,setPassword] = useState('')
  const submitHandler = (e) =>{
     e.preventDefault()
     
     setEmail('')
     setPassword('')
  }
  return (
    <div className = 'flex h-screen w-screen justify-center items-center'>
      <div className='relative rounded border-2 p-20 border-emerald-600'>
        <form onSubmit={submitHandler} className='flex flex-col justify-center items-center'>
          <div className = 'relative w-full'>
            <Mail className='absolute left-3 pr-0.5 top-1/2 -translate-y-1/2 text-emerald-600'/>
            <input required className = 'rounded border-2 border-emerald-600 p-2 pl-10' type = 'email'
            value = {email} 
            onChange={(e)=>{
              setEmail(e.target.value)
            }} placeholder = 'Enter email'/>
          </div>
          <div className='relative w-full'>
            <Lock className='absolute left-3 pr-0.5 top-1/2 -translate-y-1/2 text-emerald-600'/>
            <input required className = 'rounded mt-2 border-2 pl-10 border-emerald-600 p-2' type = 'password' 
             value = {password} 
            onChange={(e)=>{
              setPassword(e.target.value)
            }}placeholder = 'Enter password'/>
          </div>
          <button className = "bg-emerald-600 mt-2 p-1 rounded w-full active:scale-90 cursor-pointer">Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login

