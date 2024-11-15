 
import React from 'react';
import classNames from 'classnames';

function TaskItem({ task, deleteTask, toggleTaskCompletion, setTaskPriority }) {
  return (
    <div
      className={classNames("task-item", { completed: task.completed })}
    >
      <input
        type="checkbox"
        checked={task.completed}
        onChange={() => toggleTaskCompletion(task.id)}
      />
      <span className="task-title">{task.title}</span>
      <select
        value={task.priority}
        onChange={(e) => setTaskPriority(task.id, e.target.value)}
        className="priority-dropdown"
      >
        <option value="High">High</option>
        <option value="Medium">Medium</option>
        <option value="Low">Low</option>
      </select>
      <button onClick={() => deleteTask(task.id)} className="delete-button">
        ✕
      </button>
    </div>
  );
}

export default TaskItem;
