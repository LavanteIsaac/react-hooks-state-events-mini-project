import React from "react";
import Task from "./Task"

function TaskList({ tasks, onDelete }) {
  const renderTask = tasks.map((task) => (
    <Task key={task.text} text={task.text} category={task.category} onDelete={onDelete} />
  ));
  return (
    <div className="tasks">
     {renderTask}
    </div>
  );
}

export default TaskList;
