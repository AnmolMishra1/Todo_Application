import React, { useState } from 'react'; // Importing React and useState hook from 'react' package
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux
import { addTask } from '../redux/actions'; // Importing addTask action creator

function TaskInput() {
  const [taskText, setTaskText] = useState(''); // Using useState hook to create state for task text input and a function to update it
  const dispatch = useDispatch(); // Creating a dispatch function using useDispatch hook to dispatch actions to the Redux store

  // Function to handle change in task text input
  const handleChange = (e) => {
    setTaskText(e.target.value); // Updating the taskText state with the new value entered in the input field
  };

  // Function to handle form submission
  const handleSubmit = (e) => {
    e.preventDefault(); // Preventing the default form submission behavior
    if (taskText.trim() !== '') { // Checking if the task text is not empty or whitespace
      dispatch(addTask(taskText.trim())); // Dispatching the addTask action with the trimmed task text
      setTaskText(''); // Resetting the taskText state to an empty string after adding the task
    }
  };

  return (
    <form onSubmit={handleSubmit}> {/* Form element with handleSubmit function as the submit event handler */}
      <div className="input-group mb-3"> {/* Bootstrap input group for styling */}
        <input type="text" className="form-control fw-bold" value={taskText} onChange={handleChange} placeholder="Add a new task" />
        {/* Input field for entering task text, with value bound to taskText state and onChange event handler */}
        <button className="btn btn-primary" type="submit">Add Task</button> {/* Submit button to add the task */}
      </div>
    </form>
  );
}

export default TaskInput; // Exporting the TaskInput component as the default export
