import React, { useState } from 'react';
import './Todo1.css'; 

function Todo1() {
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState('');

  const handleAddTask = () => {
    if (taskInput.trim() !== '') {
      const newTask = {
        id: Date.now(),
        text: taskInput,
        done: false,
      };
      setTasks([...tasks, newTask]);
      setTaskInput('');
    }
  };

  const handleDeleteTask = (taskId) => {
    setTasks(tasks.filter(task => task.id !== taskId));
  };

  const handleUpdateTask = (taskId, newText) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, text: newText } : task
    ));
  };

  const handleToggleDone = (taskId) => {
    setTasks(tasks.map(task =>
      task.id === taskId ? { ...task, done: !task.done } : task
    ));
  };

  return (
    <div class="todo-app">
      <h1>Todo App</h1>
      <div class="tasks">
        {tasks.map(task => (
          <div key={task.id} class={`task ${task.done ? 'done' : ''}`}>
            <input
              type="checkbox"
              checked={task.done}
              onChange={() => handleToggleDone(task.id)}
            />
            <input
              type="text"
              value={task.text}
              onChange={(e) => handleUpdateTask(task.id, e.target.value)}
            />
            <button onClick={() => handleDeleteTask(task.id)}>Delete</button>
          </div>
        ))}
      </div>
      <div class="add-task">
        <input
          type="text"
          value={taskInput}
          onChange={(e) => setTaskInput(e.target.value)}
          placeholder="Add new task"
        />
        <button onClick={handleAddTask}>Add Task</button>
      </div>
    </div>
  );
}

export default Todo1;
