import React, { use } from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'
import { useContext ,Auth} from 'react'

const AdminDashboard = () => {
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div className='flex flex-row gap-10'>
        <Createtask/>
        <Alltask/>
      </div>
    </div>
  )
}

export default AdminDashboard
