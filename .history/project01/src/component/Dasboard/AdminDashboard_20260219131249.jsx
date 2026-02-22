import React, { use } from 'react'
import Header from '../other/Header'
import Createtask from '../other/Createtask'
import Alltask from '../other/Alltask'
import { useContext} from 'react'
import { AuthContext } from '../../Context/AuthProvider'

const AdminDashboard = (props) => {
  const authData = useContext(AuthContext);
  console.log(authData);
  return (
    <div className='h-screen w-full p-10'>
      <Header/>
        <Createtask/>
        <Alltask data = {authData}/>
    </div>
  )
}

export default AdminDashboard
