import React, { useState } from "react";
import FullCalendar from "@fullcalendar/react"; // FullCalendar library
import dayGridPlugin from "@fullcalendar/daygrid"; // For month/day view
import timeGridPlugin from "@fullcalendar/timegrid"; // For scheduling
import interactionPlugin from "@fullcalendar/interaction"; // For event handling
import "bootstrap/dist/css/bootstrap.min.css";


const AdminTaskAssignmentWithCalendar = ({ onAssignTask }) => {
  const [taskTitle, setTaskTitle] = useState("");
  const [taskDescription, setTaskDescription] = useState("");
  const [employee, setEmployee] = useState("");
  const [status, setStatus] = useState("Assigned");
  const [events, setEvents] = useState([]);

  const handleAssignTask = () => {
    if (!taskTitle || !taskDescription || !employee) {
      alert("Please fill out all fields.");
      return;
    }
    const newTask = {
      title: taskTitle,
      description: taskDescription,
      status: status,
      employee: employee,
    };

    onAssignTask(newTask);

    // Add task as an event on the calendar
    setEvents((prevEvents) => [
      ...prevEvents,
      {
        title: `${taskTitle} (Assigned to: ${employee})`,
        start: new Date().toISOString(),
        allDay: true,
      },
    ]);

    // Reset form fields
    setTaskTitle("");
    setTaskDescription("");
    setEmployee("");
    setStatus("Assigned");
    alert("Task assigned and added to the calendar successfully!");
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
      <div className="card p-4 mb-4">
        <h4>Assign Task to Employee</h4>
        <div className="form-group">
          <label>Employee:</label>
          <input
            type="text"
            value={employee}
            onChange={(e) => setEmployee(e.target.value)}
            placeholder="Enter employee name"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Task Title:</label>
          <input
            type="text"
            value={taskTitle}
            onChange={(e) => setTaskTitle(e.target.value)}
            placeholder="Enter task title"
            className="form-control"
          />
        </div>
        <div className="form-group">
          <label>Task Description:</label>
          <textarea
            rows="4"
            value={taskDescription}
            onChange={(e) => setTaskDescription(e.target.value)}
            placeholder="Enter task description"
            className="form-control"
          ></textarea>
        </div>
        <button onClick={handleAssignTask} className="btn btn-primary">
          Assign Task
        </button>
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
    </div>
  );
};

export default AdminTaskAssignmentWithCalendar;
