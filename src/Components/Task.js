import "./Task.css"
import { Form, Container, Row, Col, Button} from 'react-bootstrap'

const Task = (props) => {
  const {index, title, isCompleted, updateTask, deleteTask} =  props
  
  return (
    <div className="sfs">
      <Container>
        <Row>
          <Col>
            <Form.Group className="mb-1">
              <Form.Label checked={isCompleted} > {title} </Form.Label>
            </Form.Group>
          </Col>
          <Col>
            <Form.Group className="mb-1" controlId="formBasicCheckbox">
              <Form.Check variant="checkbox" type="checkbox" checked={isCompleted} onChange={() => updateTask(title)} />
            </Form.Group>
          </Col>  
          <Col>
            <Button variant="info" type="submit" onClick={() => deleteTask(index)}> Delete </Button>
          </Col> 
        </Row>
     </Container>
    </div>
  )
}

export default Task