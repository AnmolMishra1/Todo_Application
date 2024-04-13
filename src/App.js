import React, { useEffect } from 'react'; // Importing React and useEffect hook from 'react' package
import './App.css'; // Importing CSS file for styling
import TaskInput from './components/TaskInput'; // Importing TaskInput component
import TaskList from './components/TaskList'; // Importing TaskList component
import { loadTasks } from './redux/actions'; // Importing loadTasks action creator
import { useDispatch } from 'react-redux'; // Importing useDispatch hook from react-redux

function App() {
  const dispatch = useDispatch(); // Creating a dispatch function using useDispatch hook to dispatch actions to the Redux store
  // Dispatch loadTasks action when the component mounts
  useEffect(() => {
    dispatch(loadTasks()); // Dispatching the loadTasks action when the component mounts
  }, [dispatch]); // Dependency array to ensure the effect runs only once

  return (
    <div className="container-fluid mt-5 con"> {/* Container to hold the entire application */}
      <div className="card"> {/* Card to display the To-Do application */}
        <div className="card-header bg-light"> {/* Card header with light background */}
          <h1 className="text-center">To Do Application</h1> {/* Title of the application */}
        </div>
        <div className="card-body light"> {/* Card body with light background */}
          <TaskInput /> {/* Rendering the TaskInput component */}
          <TaskList /> {/* Rendering the TaskList component */}
        </div>
      </div>
    </div>
  );
}

export default App; // Exporting the App component as the default export
