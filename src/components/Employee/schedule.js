import React, { useState, useEffect } from "react";
import FullCalendar from "@fullcalendar/react";
import dayGridPlugin from "@fullcalendar/daygrid"; // For month/day view
import timeGridPlugin from "@fullcalendar/timegrid"; // For scheduling
import interactionPlugin from "@fullcalendar/interaction"; // For event handling
import "bootstrap/dist/css/bootstrap.min.css";

const EmployeeScheduler = ({ assignedTasks }) => {
  const [events, setEvents] = useState([]);

  useEffect(() => {
    // Initialize the employee's calendar with the assigned tasks
    const taskEvents = assignedTasks.map((task) => ({
      title: `${task.title} - ${task.employee}`,
      start: task.start,
      description: task.description,
      allDay: true,
    }));
    setEvents(taskEvents);
  }, [assignedTasks]);

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
      <h2>Your Schedule</h2>
      <div className="card p-4 mb-4">
        <h4>View Your Assigned Tasks and Meetings</h4>
        <p>You can see your tasks and meetings below.</p>
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

export default EmployeeScheduler;
