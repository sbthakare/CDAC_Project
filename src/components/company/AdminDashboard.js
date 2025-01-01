import React, { useState } from "react";
import PostJob from "./PostJob";
import WorkTracker from "./WorkTracker";
import ViewStudents from "./ViewStudents";
import ViewEmployees from "./ViewEmployees";
<<<<<<< HEAD
import EmployeeCalendar from "./EmployeeCalendar";
import AdminJobManagement from "./AdminJobManagement";

=======
import Transactions from "./Transactions";
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

const AdminDashboard = () => {
  const [activeSection, setActiveSection] = useState("postJob");

  const showSection = (sectionId) => {
    setActiveSection(sectionId);
  };

 

  return (
    <div className="dashboard">
      {/* Sidebar */}
      <div className="sidebar">
        <h3>Admin Dashboard</h3>
        <ul>
        
          <li onClick={() => showSection("postJob")}>Post Job</li>
          <li onClick={() => showSection("workTracker")}>Task Assign</li>
          <li onClick={() => showSection("viewStudents")}>View Students</li>
          <li onClick={() => showSection("viewEmployees")}>Employees Management</li>
<<<<<<< HEAD
          <li onClick={() => showSection("viewEmployeescal")}>EmployeeCalendar</li>
          <li onClick={() => showSection("adminjobmanage")}>AdminJobManagement</li>
=======
          <li onClick={() => showSection("transactions")}>Transactions</li>
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
        </ul>
      </div>

      {/* Content Area */}
      <div className="content">
        {activeSection === "postJob" && <PostJob />}
        {activeSection === "workTracker" && <WorkTracker />}
        {activeSection === "viewStudents" && <ViewStudents />}
        {activeSection === "viewEmployees" && <ViewEmployees />}
<<<<<<< HEAD
        {activeSection === "viewEmployeescal" && <EmployeeCalendar />}
        {activeSection === "adminjobmanage" && <AdminJobManagement />}
=======
        {activeSection === "transactions" && <Transactions/>}
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
      </div>
    </div>
  );
};

export default AdminDashboard;
