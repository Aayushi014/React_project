import React from 'react'

const Login = () => {
  return (
    <div className='h-screen flex justify-center items-center border-amber-300'>
      <div>
        <div>
            <label for="email">Email:</label>
            <input required type = 'email' placeholder='Enter email'/>
        </div>
       <div>
            <label for="password">Password:</label>
            <input required type = 'email' placeholder='Enter '/>
        </div>
      </div>
    </div>
  )
}

export default Login
