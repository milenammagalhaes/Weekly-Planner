import "./Task.css"

const Task = (props) => {
  const {title, isCompleted, updateTask} =  props
  
  return (
    <div className="container">
      <h1>{title}</h1> 
      <input type="checkbox" checked={isCompleted} onChange={() => updateTask(title)} />
      <span className="checkbox"></span>
    </div>
  )
}

export default Task