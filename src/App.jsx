 
import React, { useState, useEffect } from 'react';
import TaskList from './TaskList';
import TaskForm from './TaskForm';
import './index.css';

function App() {
  const [tasks, setTasks] = useState([]);
  const [searchQuery, setSearchQuery] = useState('');
  const [sortOption, setSortOption] = useState('priority');

  useEffect(() => {
    const savedTasks = JSON.parse(localStorage.getItem('tasks'));
    if (savedTasks) setTasks(savedTasks);
  }, []);

  useEffect(() => {
    localStorage.setItem('tasks', JSON.stringify(tasks));
  }, [tasks]);

  const addTask = (title) => {
    setTasks([...tasks, { title, completed: false, priority: 'Medium', id: Date.now() }]);
  };

  const deleteTask = (id) => {
    setTasks(tasks.filter((task) => task.id !== id));
  };

  const toggleTaskCompletion = (id) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    ));
  };

  const setTaskPriority = (id, priority) => {
    setTasks(tasks.map((task) =>
      task.id === id ? { ...task, priority } : task
    ));
  };

  const sortedTasks = tasks
    .filter((task) => task.title.toLowerCase().includes(searchQuery.toLowerCase()))
    .sort((a, b) => {
      if (sortOption === 'priority') {
        const priorities = { High: 1, Medium: 2, Low: 3 };
        return priorities[a.priority] - priorities[b.priority];
      } else if (sortOption === 'completed') {
        return a.completed - b.completed;
      }
      return 0;
    });

  return (
    <div className="app">
      <h1>Task Manager</h1>
      <TaskForm addTask={addTask} />
      <input
        type="text"
        placeholder="Search tasks..."
        value={searchQuery}
        onChange={(e) => setSearchQuery(e.target.value)}
        className="search-bar"
      />
      <div className="sorting-options">
        <label>Sort by: </label>
        <select onChange={(e) => setSortOption(e.target.value)} value={sortOption}>
          <option value="priority">Priority</option>
          <option value="completed">Completion Status</option>
        </select>
      </div>
      <TaskList
        tasks={sortedTasks}
        deleteTask={deleteTask}
        toggleTaskCompletion={toggleTaskCompletion}
        setTaskPriority={setTaskPriority}
      />
    </div>
  );
}

export default App;
