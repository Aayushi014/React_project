import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center border-'>
      <div className = "border-2 flex flex-col p-2">
           <input required placeholder = "Enter your email" type = "email"/>
           <input required placeholder = "Enter password" type = "password"/>
      </div>
    </div>
  )
}

export default Login
