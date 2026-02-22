import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center border-amber-300'>
      <div>
            <input required type = 'email' placeholder='Enter email'/>

            <input required type = 'email' placeholder='Enter Password'/>
      </div>
    </div>
  )
}

export default Login
