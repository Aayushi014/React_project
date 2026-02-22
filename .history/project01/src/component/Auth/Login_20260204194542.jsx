import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className = "border-2 rounded flex flex-col p-3">
           <input className='rounded bg-emerald-600 p-2' required placeholder = "Enter your email" type = "email"/>
           <input className='mt-2' required placeholder = "Enter password" type = "password"/>
      </div>
    </div>
  )
}

export default Login
