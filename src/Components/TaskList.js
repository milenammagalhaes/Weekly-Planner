import Task from "./Task"
import { useState } from "react"
import  "./TaskList.css"

const TasksList = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([
    {
      title: "Estudar React",
      isCompleted: true 
    },
    {
      title: "Arrumar a casa",
      isCompleted: false 
    }
  ])

   
  const createNewTask = () => {
    const actualTasks = tasks
    actualTasks.push({ title: newTask, isCompleted: false })
    setTasks(() => ([...actualTasks]))    
    console.log(actualTasks)
    setNewTask('')
  }

  const updateTask = (title) => {
    const actualTasks = tasks.map((task, index) => {
      if(task.title === title) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })  
    setTasks(() => ([...actualTasks]))  
  }
  
  return ( 
    <div>
      <div>
        <input type="text" value={newTask} onChange={(event)=> {setNewTask(event.target.value)}}/>
         <button onClick={createNewTask}> Create </button>
      </div>
    {tasks.map((task, index) => {
      return <Task key={index} title={task.title} isCompleted={task.isCompleted} updateTask={updateTask} />
    })}

  </div>
  )
}



export default TasksList
