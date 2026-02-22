import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className = "border-2 p-20 rounded flex flex-col">
        <form className = 'flex flex-col items'>
          <input className='rounded bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter your email" type = "email"/>
          <input className='mt-2 rounded bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter password" type = "password"/>
        </form>
      </div>
    </div>
  )
}

export default Login
