import './App.css';
import TasksList from './Components/TaskList';
import 'bootstrap/dist/css/bootstrap.min.css';

const App = () => {
  const daysWeek = ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']

  return (
    <div className="all">
      <h1> My ToDo List</h1>
      <div className="daysWeek">
         {daysWeek.map((dayName, index) => {
          return <TasksList key={index} index={index} dayName={dayName} />
         })}
      </div>
    </div>
  )
}

export default App;
