import React from 'react'

const Login = () => {
  return (
    <div>
      <div>
        <form className='flex flex-col justify-center items-center'>
          <input required className = 'border-2 border-emerald-600' type = 'email' placeholder = 'Enter email'/>
        </form>
      </div>
    </div>
  )
}

export default Login

