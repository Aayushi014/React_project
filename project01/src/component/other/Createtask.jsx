import React from 'react'
import { useState } from 'react'
const Createtask = ({onTaskCreated}) => {
  const[taskTitle, setTaskTitle] = useState("");
  const[taskDate, setTaskDate] = useState("");
  const[taskAssign, setTaskAssign] = useState("");
  const[taskCategory, setTaskCategory] = useState("");
  const[taskDescription, setTaskDescription] = useState("");
  const submitHandler = (e) =>{
    e.preventDefault();
    // console.log(taskTitle, taskDate, taskAssign, taskCategory, taskDescription);
      const createdTask = {
        active: false,
        newTask: true,
        completed: false,
        failed: false,
        taskTitle,
        taskDate,
        category: taskCategory,
        taskDescription,
  };
    const data = JSON.parse(localStorage.getItem("employees"));
    data.forEach(function(e){
      if(e.firstName === taskAssign){
        e.tasks.push(createdTask);
        e.taskNumbers.newTask += 1;
        console.log(e);
      }
    })
    localStorage.setItem("employees", JSON.stringify(data));
    
    // Notify parent component to refresh data
    if(onTaskCreated) {
      onTaskCreated();
    }
    
    setTaskTitle("");
    setTaskDate("");
    setTaskAssign("");
    setTaskCategory("");
    setTaskDescription("");
  }
  return (
      <div className='mt-5 p-5'>
          <form className='flex flex-wrap w-full items-start justify-between'
          onSubmit={submitHandler}>
            <div className='w-1/2'>
              <div>
                <h3>Task title</h3>
                <input type="text" placeholder="Enter task title" className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5"
                value = {taskTitle} onChange={(e) => setTaskTitle(e.target.value)}/>
              </div>
              <div>
                <h3>Date</h3>
                <input type="date" className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5
                scheme-dark" value = {taskDate} onChange={(e) => setTaskDate(e.target.value)}/>
              </div>
              <div>
                <h3>Assign to</h3>
                <input type = "text" placeholder='employee name' className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5" value = {taskAssign} onChange={(e) => setTaskAssign(e.target.value)}/>
              </div>
              <div>
                <h3>Category</h3>
              <input type = "text" placeholder='design/dev/other' className="border my-2 border-gray-300 rounded px-3 py-2 w-4/5" value = {taskCategory} onChange={(e) => setTaskCategory(e.target.value)}/>
              </div>
            </div>
            <div className='w-2/5 flex flex-col items-start'>
               <h3>Task description</h3>
               <textarea  placeholder="Enter task description" className="border my-2 border-gray-300 rounded px-3 py-2 w-full h-44" value = {taskDescription} onChange={(e) => setTaskDescription(e.target.value)}/>
               <button className="bg-emerald-600 mt-2 rounded active:scale-90 p-2 cursor-pointer w-full">Create Task</button> 
            </div>
          </form> 
      </div>
  )
}

export default Createtask
