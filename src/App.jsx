import React, { useState } from 'react';
import './App.css';
import Button from './Button';
import TodoRow from './TodoRow';



const App = () => {
  const [taskInput, setTaskInput] = useState('');
  const [tasks, setTasks] = useState([
    'Task 1',
    'Task 2',
    'Task 3',
    'Task 4'
  ]);

  const handleTaskInputChange = (event) => {
    setTaskInput(event.target.value);
  };

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      setTasks([...tasks, taskInput]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (index) => {
    const updatedTasks = [...tasks];
    updatedTasks.splice(index, 1);
    setTasks(updatedTasks);
  };

  return (
    <div className="app">
      <h1>Todo List</h1>
      {tasks.map((task, index) => (
        <TodoRow
          key={index}
          label={task}
          onDelete={() => handleDeleteTask(index)}
        />
      ))}
      <div className="add-task">
        <input type="text" placeholder='Add task here...' value={taskInput} onChange={handleTaskInputChange} />
        <Button variant="big" onClick={handleAddTask}>
          Add Task
        </Button>
      </div>
    </div>
  );
};

export default App;