import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center'>
      <div className = "border-2 flex flex-col p-2">
           <input className='rounded' required placeholder = "Enter your email" type = "email"/>
           <input className='mt-2' required placeholder = "Enter password" type = "password"/>
      </div>
    </div>
  )
}

export default Login
