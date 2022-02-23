import "./Task.css"
import { Form, Container, Row, Col, Button } from 'react-bootstrap'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faTrashCan} from '@fortawesome/free-solid-svg-icons'

const Task = (props) => {
  const { index, title, isCompleted, updateTask, deleteTask } = props

  const trashIcon = <FontAwesomeIcon icon={faTrashCan} />
  
  
  return (
    <div className="sfs">
      <Container>
        <Row className="row">
          <Col xs={1}>
            <Form.Check variant="checkbox" type="checkbox" checked={isCompleted} onChange={() => updateTask(title)} />
          </Col>  
          <Col xs={6}>
            <Form.Label className={isCompleted ? 'taskTitle' : 'somethinhgelse'}> {title} </Form.Label>
         </Col>
          <Col xs={3}>
            <button className="delete" onClick={() => deleteTask(index)}> {trashIcon} </button>
          </Col> 
        </Row>
     </Container>
    </div>
  )
}

export default Task