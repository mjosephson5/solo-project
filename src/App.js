// import React from 'react';
import React, { useState } from 'react';
import './styles/Hello.css';

const App = () => {
  const [tasks, setTasks] = useState([]); //state to store lists of tasks (array)
  const [task, setTask] = useState(''); //state to store the current task

  //handle change in the input field
  const handleInputChange = (event) => {
    setTask(event.target.value); //everytime user types something, task state updated
  };

  //handle form submission to add the task to the list
  const handleAddTask = (event) => {
    event.preventDefault(); //prevent page refresh on form submission
    console.log('current task', task);
    if (task.trim() !== '') {
      //Only add if the task is not empty
      setTasks([...tasks, task]); //updates the lists of tasks by
      //adding new task to the tasks array
      console.log('updated tasks', tasks);
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
          onChange={handleInputChange} //react attr that handles input or form changes, it fires an event whenever the value of the input changes
          placeholder="What's on the docket for today, Captain?"
        />
        <button type='submit'>Add to list</button>
      </form>

      {/* display tasks - tasks is array of to-do items, maps over and for each task in task array it creates list item*/}
      <ul>
        {tasks.map((tasks, index) => (
          <li key={index}>{tasks}</li>
        ))}
      </ul>
    </div>
  );
};

export default App;
