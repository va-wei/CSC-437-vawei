import React, { useState } from 'react';

function AddTaskForm({ onNewTask }) {
  const [taskName, setTaskName] = useState("");

  function handleChange(event) {
    setTaskName(event.target.value);
  }

  function handleButtonClicked() {
    if (taskName.trim) {
      onNewTask(taskName);
      setTaskName("");
    }
  }

  return (
    <div className="flex items-center space-x-2">
      {" "}
      {/* Unfortunately comments in JSX have to be done like this */}
      <input
        type="text"
        placeholder="New task name"
        className="border border-black-300 rounded-lg px-2 py-2 focus:outline-none focus:ring-2 focus:ring-blue-500"
        value={taskName}
        onChange={handleChange}
      />
      <button
        onClick={handleButtonClicked}
        className="bg-blue-500 text-white px-2 py-1 rounded-sm hover:bg-blue-600 active:bg-blue-800"
      >
        Add task
      </button>
    </div>
  );
}

export default AddTaskForm;
