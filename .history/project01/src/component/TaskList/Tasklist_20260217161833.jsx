import React from 'react'
import AcceptTask from './AcceptTask'
import NewTask from './NewTask'
import CompleteTask from './CompleteTask'
import FailedTask from './FailedTask'

const Tasklist = ({data}) => {
  return (
    <div id="tasklist" className=' w-full h-[55%] flex justify-start flex-nowrap overflow-x-auto  gap-5 mt-10 py-5 text-black'>
      {data.tasks.map((e,idx)=>{
        if(e.active){
          return <AcceptTask key={idx}/>
        }
        if(e.newTask){
          return <NewTask key={idx} />
        }
        if(e.completed){
          return <CompleteTask/>
        }
        if(e.failed){
          return <FailedTask/>
        }
      })}
    </div>
  )
}

export default Tasklist
