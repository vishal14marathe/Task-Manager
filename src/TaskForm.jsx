// src/TaskForm.jsx
import React, { useState } from 'react';

function TaskForm({ addTask }) {
  const [taskInput, setTaskInput] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (taskInput.trim()) {
      addTask(taskInput.trim());
      setTaskInput('');
    }
  };

  return (
    <form onSubmit={handleSubmit} className="task-form">
      <input
        type="text"
        placeholder="Add a new task"
        value={taskInput}
        onChange={(e) => setTaskInput(e.target.value)}
        className="task-input"
      />
      <button type="submit" className="add-task-button">Add</button>
    </form>
  );
}

export default TaskForm;
