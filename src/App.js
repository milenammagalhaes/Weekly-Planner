import './App.css';
import TasksList from './Components/TaskList';
import { Col, Row} from 'react-bootstrap'
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="all">
        <Row>
          <h1 className="title"> My ToDo List</h1>
        </Row>
        <Row style={{ marginLeft: 20, marginRight: 20 }}>
          {daysWeek.map((dayName, index) => {
            return <Col className="daysWeek" style={{ paddingLeft: 0, paddingRight: 0 }}><TasksList key={index} index={index} dayName={dayName} /> </Col>
          })}
        </Row>
    </div>
  )
}

export default App;
