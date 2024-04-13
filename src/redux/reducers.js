// Initial state of the Redux store, containing an empty array of tasks
const initialState = {
    tasks: [],
  };
  
  // Reducer function to manage state changes based on dispatched actions
  const reducer = (state = initialState, action) => {
    // Switch statement to handle different action types
    switch (action.type) {
      case 'ADD_TASK': // Case for adding a new task
        return {
          ...state,
          tasks: [...state.tasks, action.payload], // Adding the new task to the tasks array in the state
        };
      case 'DELETE_TASK': // Case for deleting a task
        return {
          ...state,
          tasks: state.tasks.filter((task) => task.id !== action.payload), // Filtering out the task with the specified ID from the tasks array
        };
      case 'LOAD_TASKS': // Case for loading tasks from local storage
        return {
          ...state,
          tasks: action.payload, // Updating the tasks array with the tasks loaded from local storage
        };
      case 'TOGGLE_TASK': // Case for toggling the completion status of a task
        return {
          ...state,
          tasks: state.tasks.map(task =>
            task.id === action.payload ? { ...task, completed: !task.completed } : task // Toggling the completed status of the task with the specified ID
          ),
        };
      default: // Default case for handling unknown action types
        return state; // Returning the current state unchanged
    }
  };
  
  export default reducer; // Exporting the reducer function as the default export
  