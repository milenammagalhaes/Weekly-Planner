import Task from "./Task"
import { useState } from "react"
import  "./TaskList.css"
import { Form, Button, Container, InputGroup} from 'react-bootstrap'


const TasksList = (props) => {
  const {dayName } = props
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

  const createNewTask = () => {
    if (newTask === "") {
      window.alert("Add a name for your new task");
    } else {
      const actualTasks = tasks
      actualTasks.push({ title: newTask, isCompleted: false })
      setTasks(() => ([...actualTasks]))
      console.log(actualTasks)
      setNewTask('')
    }
  }

  const updateTask = (title) => {
    const actualTasks = tasks.map((task, index) => {
      if (task.title === title) {
        task.isCompleted = !task.isCompleted
      }
      return task
    })
    setTasks(() => ([...actualTasks]))
  }
  
  const deleteTask = (index) => {
    const actualTasks = tasks
    actualTasks.splice(index, 1)
    setTasks(() => ([...actualTasks]))
  }
 
  const clickedEnter = (event) => {
    if (event.keyCode === 13) {
      createNewTask()
    }
  }

    return (

      <Container  >
        <h4 className="dayName"> {dayName} </h4>
        <InputGroup className="mb-3">
          <Form.Control className="input" type="text" placeholder="New Task" value={newTask} onChange={(event) => { setNewTask(event.target.value) }} onKeyDown={(e) => clickedEnter(e)} />
          <Button variant="outline-info" id="button-addon2" onClick={createNewTask}> Create </Button>
        </InputGroup>

        {tasks.map((task, index) => {
          return <Task key={index} title={task.title} isCompleted={task.isCompleted} updateTask={updateTask} deleteTask={deleteTask} index={index} />
        })}
      
      </Container>
    )
  
}



export default TasksList
