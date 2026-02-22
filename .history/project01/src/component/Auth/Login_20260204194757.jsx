import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <form className = "border-2 rounded flex flex-col p-3">
           <input className='rounded bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter your email" type = "email"/>
           <input className='mt-2 rounded bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter password" type = "password"/>
      </form>
    </div>
  )
}

export default Login
