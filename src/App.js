import Header from "./components/Header";
import './index.css';
import Tasks from "./components/Tasks";
import { useState } from "react"


function App() {
  const [tasks, setTask] = useState(
    [
        {
            id: 1,
            text: 'Doctor Appointment',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 2,
            text: 'Meeting at school',
            day: 'Feb 5th at 2:30pm',
            reminder: true,
        }, 
        {
            id: 3,
            text: 'Food Shopping',
            day: 'Feb 5th at 2:30pm',
            reminder: false,
        },
        {
            id: 4,
            text: 'News Update',
            day: 'Feb 6th at 2:40pm',
            reminder: false,
        },
        {
            id: 5,
            text: 'Software Updates',
            day: 'Feb 6th at 2:40pm',
            reminder: true,
        },
        {
            id: 6,
            text: 'E-comers Cart',
            day: 'Feb 7th at 2:40pm',
            reminder: true,
        }
    ])
  //delete tasks
  const deleteTask=(id)=>{
    setTask(tasks.filter((task)=>task.id!= id)) // here if the id deleted is not in list it will show
  }
  // Toggle Reminder
  const toggleReminder=(id)=>{
    setTask( // we are using ,map because we have itarate/change something with the value
      tasks.map((task)=> 
        task.id == id ?{...task,reminder: !task.reminder} : task) // here the condition means that if the reminder is same then the it will change to opposite
    )
  }
  return (
    <div className="container">
      <Header />
      {tasks.length>0 ?<Tasks tasks={tasks} 
      onDelete={deleteTask} 
      onToggle={toggleReminder}/>: 'Nothing to show'} // passimg as parameter
    </div>
  );
}

export default App;
