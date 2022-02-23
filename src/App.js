import './App.css';
import TasksList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  return (
    <div className="all">
      <h1> My ToDo List</h1>
      <TasksList className="tasksBox"/>
    </div>
  )
}

export default App;
