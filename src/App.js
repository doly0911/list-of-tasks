import {useState} from "react";
import Todo from "./components/Todo";
import Form from "./components/Form";
import FilterButton from "./components/FilterButton";
import { nanoid } from "nanoid";

function App(props) {
  const [tasks, setTasks] = useState(props.tasks)
  

  function toggleTaskCompleted(id) {
    console.log(tasks[0])  }
  
  const taskList = tasks.map(task => 
        <Todo 
            id={task.id}
            name={task.name}
            completed={task.completed} 
            key={task.id}
            toggleTaskCompleted = {toggleTaskCompleted}
        />
        );

  const tasksNoun = taskList.length !== 1 ? 'tasks' : 'task';
  const headingText = `${taskList.length} ${tasksNoun} remaining`;

  function addTask(name){
    const newTask = {
      id: "todo-"+ nanoid(),
      name: name,
      completed: false
    };
    console.log("id creado: ", newTask.id)
    setTasks([...tasks, newTask]);      
  }
  

  return (
    <div className="todoapp stack-large" >
      <h1>Aprendiendo React :)</h1>
      <Form addTask={addTask} />
      <div className="filters btn-group stack-exception">
        <FilterButton nameFilter="All"/>
        <FilterButton nameFilter="Active"/>
        <FilterButton nameFilter="Completed"/>
      </div>     

      <h2 id="list-heading">
      {headingText}
      </h2>

      <ul
      role="list"
      className="todo-list stack-large stack-exception"
      aria-labelledby="list-heading">
        {taskList}
      </ul>

    </div>
  );
}

export default App;
