import Task from "./Task"
import { useState } from "react"
import  "./TaskList.css"
import { Form, Button, Container, Row, Col} from 'react-bootstrap'


const TasksList = () => {
  const [newTask, setNewTask] = useState('')
  const [tasks, setTasks] = useState([])

   
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
  
  const deleteTask = (index) => {
    const actualTasks = tasks
    actualTasks.splice(index,1)
    setTasks(() => ([...actualTasks]))  
  }
 

  return ( 
    <Container>
      <Row>
        <Col>
          <Form.Control type="text" placeholder="New Task" value={newTask} onChange={(event)=> {setNewTask(event.target.value)}}/>
        </Col>
        <Col>
          <Button variant="info" type="submit" onClick={createNewTask}> Create </Button>
        </Col>
      </Row>
    {tasks.map((task, index) => {
      return <Task key={index} title={task.title} isCompleted={task.isCompleted} updateTask={updateTask} deleteTask={deleteTask} index={index}/>
    })}
  </Container>
  )
}



export default TasksList
