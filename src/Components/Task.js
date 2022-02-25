import "./Task.css"
import { Form, ListGroup} from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {
  const { index, title, isCompleted, updateTask, deleteTask } = props

  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
  
  
  return (
  <div>
    <ListGroup as="ol">
     <ListGroup.Item as="li" className="d-flex justify-content-between align-items-start" >
        <Form.Check variant="checkbox" type="checkbox" checked={isCompleted} onChange={() => updateTask(title)} />
        <Form className={isCompleted ? 'taskTitleComplete' : 'taskTitle'}> {title} </Form> 
        <button className="delete" onClick={() => deleteTask(index)}> {trashIcon} </button>
       </ListGroup.Item>
    </ListGroup>
  </div>
  
  )
}

export default Task