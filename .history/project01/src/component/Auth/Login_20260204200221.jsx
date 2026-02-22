import React from 'react'

const Login = () => {
  return (
    <div className = 'flex hjustify-center items-center'>
      <div>
        <form className='flex flex-col justify-center items-center'>
          <input required className = 'border-2 border-emerald-600 p-2' type = 'email' placeholder = 'Enter email'/>
        </form>
      </div>
    </div>
  )
}

export default Login

