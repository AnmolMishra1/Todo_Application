// Action creator to add a new task to the Redux store
export const addTask = (text) => ({
    type: 'ADD_TASK', // Action type indicating that a task should be added
    payload: { // Payload containing the details of the new task
      id: new Date().getTime().toString(), // Generating a unique ID for the task using the current timestamp
      text, // Task text passed as an argument to the action creator
    },
  });
  
  // Action creator to delete a task from the Redux store
  export const deleteTask = (id) => ({
    type: 'DELETE_TASK', // Action type indicating that a task should be deleted
    payload: id, // Payload containing the ID of the task to be deleted
  });
  
  // Action creator to toggle the completion status of a task in the Redux store
  export const toggleTask = (id) => ({
    type: 'TOGGLE_TASK', // Action type indicating that the completion status of a task should be toggled
    payload: id, // Payload containing the ID of the task to be toggled
  });
  
  // Action creator to load tasks from local storage into the Redux store
  export const loadTasks = () => {
    // Retrieving tasks from local storage or initializing an empty array if no tasks are found
    const savedTasks = JSON.parse(localStorage.getItem('tasks')) || [];
    return {
      type: 'LOAD_TASKS', // Action type indicating that tasks should be loaded into the Redux store
      payload: savedTasks, // Payload containing the tasks retrieved from local storage
    };
  };
  
  // Action creator to save tasks from the Redux store to local storage
  export const saveTasks = (tasks) => {
    // Saving tasks to local storage as a JSON string
    localStorage.setItem('tasks', JSON.stringify(tasks));
  };
  