import React, { use } from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'
import { useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AdminDashboard = () => {
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
      <div className='flex flex-row gap-10'>
        <Createtask/>
        <Alltask data = {authData}/>
    </div>
  )
}

export default AdminDashboard
