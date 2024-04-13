import React from 'react';   // Importing React from the react package

import { useSelector, useDispatch } from 'react-redux'; // Importing hooks from react-redux for accessing Redux state and dispatching actions
import { toggleTask, deleteTask } from '../redux/actions'; // Importing action creators for toggling and deleting tasks

function TaskList() {
  const tasks = useSelector((state) => state.tasks); // Accessing tasks array from Redux store using useSelector hook
  const dispatch = useDispatch(); // Creating a dispatch function using useDispatch hook to dispatch actions to the Redux store

  // Function to handle toggling of task completion
  const handleToggle = (id) => {
    dispatch(toggleTask(id)); // Dispatching the toggleTask action with the task ID
  };

  // Function to handle deletion of a task
  const handleDelete = (id) => {
    dispatch(deleteTask(id)); // Dispatching the deleteTask action with the task ID
  };

  return (
    <ul className="list-group"> {/* Creating an unordered list with the Bootstrap list-group class */}
      {tasks.map((task) => ( 
        <li key={task.id} className={`list-group-item d-flex justify-content-between align-items-center ${task.completed ? 'completed' : ''}`} style={{ backgroundColor: task.completed ? 'green' : 'inherit' }}>
          {/* Creating a list item for each task with conditional classes and background color */}
          <span onClick={() => handleToggle(task.id)} style={{ cursor: 'pointer', textDecoration: task.completed ? 'line-through' : 'none' }}>{task.text}</span>
          {/* Displaying the task text and applying conditional text decoration */}
          <div>
            <button className="btn btn-success mr-2" onClick={() => handleToggle(task.id)}>completed</button>
            {/* Button to toggle task completion */}
            <button className="btn btn-danger" onClick={() => handleDelete(task.id)}>Delete</button>
            {/* Button to delete the task */}
          </div>
        </li>
      ))}
    </ul>
  );
}

export default TaskList;
