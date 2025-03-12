import Task from "./Task"

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <>
       {tasks.map((task) =>(
        <Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}/> //Here we called the 'Task' components , and pass the props
       ))}
    </>
  )
}

export default Tasks