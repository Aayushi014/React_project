import React from 'react'

const Login = () => {
  return (
    <div className='h-screen w-screen flex justify-center items-center'>
      <div className = "border-2 p-20 rounded flex flex-col">
        <form className = 'flex flex-col items-center justify-center'>
          <input className='bg-transparent rounded w-full bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter your email" type = "email"/>
          <input className='mt-2 rounded bg-emerald-600 p-2 placeholder:text-black' required placeholder = "Enter password" type = "password"/>
          <button className = 'bg-emerald-600 mt-3 p-1 rounded w-full text-black active:scale-90'>Login</button>
        </form>
      </div>
    </div>
  )
}

export default Login
