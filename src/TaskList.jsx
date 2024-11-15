// src/TaskList.jsx
import React from 'react';
import TaskItem from './TaskItem';

function TaskList({ tasks, deleteTask, toggleTaskCompletion, setTaskPriority }) {
  return (
    <div className="task-list">
      {tasks.map((task) => (
        <TaskItem
          key={task.id}
          task={task}
          deleteTask={deleteTask}
          toggleTaskCompletion={toggleTaskCompletion}
          setTaskPriority={setTaskPriority}
        />
      ))}
    </div>
  );
}

export default TaskList;
