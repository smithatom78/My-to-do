import logo from './logo.svg';
import './App.css';
import React, { useEffect, useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

function App(){
  const [tasks, setTasks] = useState([]);
  const [taskInput, setTaskInput] = useState("");

  // Add Task Handler
  const handleAddTask = () => {
    if (taskInput.trim() === "") return;
    const newTask = {
      id: Date.now(),
      title: taskInput,
      completed: false,
    };
    setTasks([...tasks, newTask]);
    setTaskInput(""); // Clear input
  };

  // Toggle Checkbox
  const handleCheckboxChange = (id) => {
    const updatedTasks = tasks.map((task) =>
      task.id === id ? { ...task, completed: !task.completed } : task
    );
    setTasks(updatedTasks);
  };

  // Delete Checked Tasks
  const handleDeleteSelected = () => {
    const updatedTasks = tasks.filter((task) => !task.completed);
    setTasks(updatedTasks);
  };

  return (
    <div className="App">
      {/* Navbar */}
      <nav className="navbar navbar-dark bg-dark">
        <a className="navbar-brand" href="#">My To-Do List</a>
        <a className="navbar-brand" href="index.html">Welcome @Smitha</a>
      </nav>

      {/* Input Area */}
      <div className="container mt-4">
        <h3 className="text-center mb-4">Plan Your Day</h3>
        <div className="input-group mb-3">
          <input
            type="text"
            className="form-control"
            placeholder="Enter a task"
            value={taskInput}
            onChange={(e) => setTaskInput(e.target.value)}
          />
          <div className="input-group-append">
            <button className="btn btn-primary" onClick={handleAddTask}>
              Add Task
            </button>
          </div>
        </div>

        {/* Task List */}
        <ul className="list-group mb-3">
          {tasks.map((task) => (
            <li key={task.id} className="list-group-item">
              <input
                type="checkbox"
                checked={task.completed}
                onChange={() => handleCheckboxChange(task.id)}
              />
              <span className="ml-2">{task.title}</span>
            </li>
          ))}
        </ul>

        {/* Delete Button */}
        <div className="text-center">
          <button className="btn btn-danger" onClick={handleDeleteSelected}>
            Delete Task
          </button>
        </div>
      </div>
    </div>
  );
}

export default App;
