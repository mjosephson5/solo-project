// import React from 'react';
import React, { useState } from 'react';
import './styles/Hello.css';

const App = () => {
  const [task, setTask] = useState(''); //state to store the current task
  const [tasks, setTasks] = useState([]); //state to store lists of tasks

  //handle change in the input field
  const handleInputChange = (event) => {
    setTask(event.target.value); //everytime user types something, task state updated
  };

  //handle form submission to add the task to the list
  const handleAddTask = (event) => {
    event.preventDefault(); //prevent page refresh on form submission
    if (task.trim() !== '') {
      //Only add if the task is not empty
      setTasks([...tasks, task]); //updates the lists of tasks by
      //adding new task to the tasks array
      setTask(''); //clear the input field after adding the task
    }
  };

  return (
    <div className='app-container'>
      <h1>Trekkie To-Do List!</h1>

      {/* input field - onSubmit handles the logic of adding a task*/}
      <form onSubmit={handleAddTask}>
        <input
          type='text'
          value={task} //state variable holding the current value of input field
          onChange={handleInputChange}
          placeholder="What's on the docket for today, Captain?"
        />
        <button type='submit'>Add to list</button>
      </form>

      {/* display tasks - tasks is array of to-do items, maps over and for each task in task array it creates list item*/}
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>{task}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
