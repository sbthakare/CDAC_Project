// EmployeeTaskTracker.js
import React, { useState } from "react";
import 'bootstrap/dist/css/bootstrap.min.css'; // Make sure to import Bootstrap CSS

const EmployeeTaskTracker = () => {
  const [tasks, setTasks] = useState([
    { id: 1, title: "Frontend Development", description: "Complete the homepage UI", status: "Assigned" },
    { id: 2, title: "Backend Development", description: "Setup API for login", status: "In Progress" },
    { id: 3, title: "Database Setup", description: "Configure MySQL database", status: "Completed" },
  ]);

  const updateTaskStatus = (taskId, newStatus) => {
    const updatedTasks = tasks.map((task) =>
      task.id === taskId ? { ...task, status: newStatus } : task
    );
    setTasks(updatedTasks);
  };

  return (
    <div className="container my-4">
      <h2 className="text-center mb-4">Employee Task Tracker</h2>
      
      {tasks.length === 0 ? (
        <div className="alert alert-info" role="alert">
          No tasks assigned yet.
        </div>
      ) : (
        <div className="row">
          {tasks.map((task) => (
            <div key={task.id} className="col-md-4 mb-3">
              <div className="card h-100">
                <div className="card-body">
                  <h5 className="card-title">{task.title}</h5>
                  <p className="card-text"><strong>Description:</strong> {task.description}</p>
                  <p className="card-text"><strong>Status:</strong> {task.status}</p>

                  {task.status !== "Completed" && (
                    <button
                      className="btn btn-warning w-100 mb-2"
                      onClick={() => updateTaskStatus(task.id, "In Progress")}
                    >
                      Mark as In Progress
                    </button>
                  )}
                  {task.status !== "Completed" && (
                    <button
                      className="btn btn-success w-100"
                      onClick={() => updateTaskStatus(task.id, "Completed")}
                    >
                      Mark as Completed
                    </button>
                  )}
                </div>
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
};

export default EmployeeTaskTracker;
