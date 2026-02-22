import React from 'react'

const TasksDisplay = ({ data, onTaskDeleted }) => {
  const handleDeleteTask = (employeeId, taskIndex) => {
    const employees = JSON.parse(localStorage.getItem("employees"));
    
    // Find the employee and remove the task
    const employee = employees.find(emp => emp.id === employeeId);
    if(employee) {
      const deletedTask = employee.tasks[taskIndex];
      
      // Update task numbers based on task status
      if(deletedTask.newTask) employee.taskNumbers.newTask -= 1;
      if(deletedTask.active) employee.taskNumbers.active -= 1;
      if(deletedTask.completed) employee.taskNumbers.completed -= 1;
      if(deletedTask.failed) employee.taskNumbers.failed -= 1;
      
      // Remove the task
      employee.tasks.splice(taskIndex, 1);
    }
    
    localStorage.setItem("employees", JSON.stringify(employees));
    if(onTaskDeleted) onTaskDeleted();
  }

  return (
    <div className='mt-10'>
      <h2 className='text-2xl font-bold mb-5'>All Tasks</h2>
      <div className='grid gap-5'>
        {data.employees.map((employee) => (
          <div key={employee.id} className='border-2 border-gray-300 rounded p-5'>
            <h3 className='text-xl font-bold mb-3'>{employee.firstName}</h3>
            {employee.tasks.length > 0 ? (
              <div className='grid gap-3'>
                {employee.tasks.map((task, idx) => (
                  <div key={idx} className='bg-gray-100 p-3 rounded flex justify-between items-start'>
                    <div className='flex-1'>
                      <div className='flex items-center gap-2 mb-2'>
                        <h4 className='font-bold'>{task.taskTitle}</h4>
                        <span className='bg-yellow-600 text-white px-2 py-1 text-xs rounded'>
                          {task.category}
                        </span>
                        {task.newTask && <span className='bg-red-500 text-white px-2 py-1 text-xs rounded'>New</span>}
                        {task.active && <span className='bg-blue-500 text-white px-2 py-1 text-xs rounded'>Active</span>}
                        {task.completed && <span className='bg-green-500 text-white px-2 py-1 text-xs rounded'>Completed</span>}
                        {task.failed && <span className='bg-gray-500 text-white px-2 py-1 text-xs rounded'>Failed</span>}
                      </div>
                      <p className='text-sm text-gray-600 mb-2'>{task.taskDescription}</p>
                      <p className='text-xs text-gray-500'>Date: {task.taskDate}</p>
                    </div>
                    <button
                      onClick={() => handleDeleteTask(employee.id, idx)}
                      className='bg-red-600 text-white px-3 py-1 rounded ml-3 active:scale-90 cursor-pointer hover:bg-red-700'
                    >
                      Delete
                    </button>
                  </div>
                ))}
              </div>
            ) : (
              <p className='text-gray-500'>No tasks assigned</p>
            )}
          </div>
        ))}
      </div>
    </div>
  )
}

export default TasksDisplay
