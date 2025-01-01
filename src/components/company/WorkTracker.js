// src/components/Admin/TaskAssignment.js

import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";

<<<<<<< HEAD
const TaskAssignment = ({ onAssignTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [status, setStatus] = useState("Assigned");
=======
const AdminTaskAssignmentWithCalendar = ({ onAssignTask }) => {
  const [newTask, setNewTask] = useState({ employee: "", details: "" });
  const [events, setEvents] = useState([]);
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

  const employees = ["Swapnil", "Pankaja", "Mohit"];

  const assignTask = () => {
    if (newTask.details.trim()) {
      const savedTasks = JSON.parse(localStorage.getItem("tasks")) || []; //add task
      
      savedTasks.push(newTask);
      // Save  tasks 
      localStorage.setItem("tasks", JSON.stringify(savedTasks));
      // Reset form
      setNewTask({ employee: "", details: "" });
      alert("Task assigned successfully!");
      if (onAssignTask) {
        onAssignTask(newTask); // Callback for parent component if provided
      }
    }
<<<<<<< HEAD

    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: status,
      employee: employee,
    };

    onAssignTask(newTask);

    alert("Task assigned successfully!");

    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setEmployee("");
    setStatus("Assigned");
  };

  return (
    <div className="task-form card p-4">
      <h4 className="card-title">Assign Task to Employee</h4>
      <div className="form-group mb-3">
        <label>Employee:</label>
        <input
          type="text"
          value={employee}
          onChange={(e) => setEmployee(e.target.value)}
          placeholder="Enter employee name"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label>Task Title:</label>
        <input
          type="text"
          value={taskTitle}
          onChange={(e) => setTaskTitle(e.target.value)}
          placeholder="Enter task title"
          className="form-control"
        />
      </div>
      <div className="form-group mb-3">
        <label>Task Description:</label>
        <textarea
          rows="4"
          value={taskDescription}
          onChange={(e) => setTaskDescription(e.target.value)}
          placeholder="Enter task description"
          className="form-control"
        ></textarea>
      </div>
      <button onClick={handleAssignTask} className="btn btn-assign">
        Assign Task
      </button>
=======
  };

  const handleDateClick = (info) => {
    const title = prompt("Enter Meeting Title");
    if (title) {
      setEvents((prevEvents) => [
        ...prevEvents,
        {
          title: `Meeting: ${title}`,
          start: info.dateStr,
          allDay: true,
        },
      ]);
      alert("Meeting scheduled successfully!");
    }
  };

  return (
    <div className="container mt-5">
      <h2>Admin Task Assignment and Calendar</h2>
      <div
        style={{
          width: "90%",
          maxWidth: "600px",
          height: "auto",
          backgroundColor: "white",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          padding: "30px",
          display: "flex",
          flexDirection: "column",
          gap: "20px",
        }}
      >
        <div style={{ display: "flex", flexDirection: "column", gap: "15px" }}>
          <div>
            <label
              htmlFor="employeeSelect"
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            >
              Assign Task To:
            </label>
            <select
              id="employeeSelect"
              className="form-control"
              value={newTask.employee}
              onChange={(e) =>
                setNewTask({ ...newTask, employee: e.target.value })
              }
              style={{
                fontSize: "1rem",
                padding: "10px",
                width: "100%",
                marginTop: "5px",
              }}
            >
              <option value="">Select an employee</option>
              {employees.map((employee, index) => (
                <option key={index} value={employee}>
                  {employee}
                </option>
              ))}
            </select>
          </div>
          <div>
            <label
              htmlFor="taskDetails"
              style={{ fontSize: "1.1rem", fontWeight: "600" }}
            >
              Task Details:
            </label>
            <textarea
              id="taskDetails"
              className="form-control"
              rows="6"
              value={newTask.details}
              onChange={(e) =>
                setNewTask({ ...newTask, details: e.target.value })
              }
              placeholder="Describe the task details here"
              style={{
                fontSize: "1rem",
                padding: "10px",
                width: "100%",
                marginTop: "5px",
              }}
            ></textarea>
            {newTask.details.trim() === "" && (
              <small style={{ color: "red", fontSize: "0.9rem" }}>
                Task details are required.
              </small>
            )}
          </div>
          <button
            onClick={assignTask}
            disabled={newTask.details.trim() === ""}
            style={{
              width: "100%",
              padding: "15px",
              fontSize: "1.2rem",
              backgroundColor: "#007bff",
              color: "white",
              border: "none",
              borderRadius: "5px",
              cursor: newTask.details.trim() === "" ? "not-allowed" : "pointer",
              opacity: newTask.details.trim() === "" ? 0.6 : 1,
            }}
          >
            Assign Task
          </button>
        </div>
      </div>
      <h4>Calendar</h4>
      <FullCalendar
        plugins={[dayGridPlugin, timeGridPlugin, interactionPlugin]}
        initialView="dayGridMonth"
        editable={true}
        selectable={true}
        events={events}
        dateClick={handleDateClick}
      />
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
    </div>
  );
};

export default TaskAssignment;
