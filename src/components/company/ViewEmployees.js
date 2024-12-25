import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS


const ViewEmployees = () => {
  const [employee, setEmployee] = useState({
    name: "",
    designation: "",
    joiningDate: "",
    email: "",
    profilePhoto: null,
  });

  const [employees, setEmployees] = useState([]);

  // Handle changes to form fields
  const handleInputChange = (e) => {
    const { name, value } = e.target;
    setEmployee({ ...employee, [name]: value });
  };

  const handleFileChange = (e) => {
    setEmployee({ ...employee, profilePhoto: e.target.files[0] });
  };

  // Generate a random username and password for the employee
  const generateCredentials = () => {
    const generatedUsername = `${employee.name.toLowerCase().replace(" ", "")}_${Date.now()}`;
    const generatedPassword = Math.random().toString(36).slice(-8); // Random password of 8 characters
    return { username: generatedUsername, password: generatedPassword };
  };

  // Handle form submission
  const handleSubmit = (e) => {
    e.preventDefault();
    if (employee.name && employee.designation && employee.joiningDate && employee.email) {
      const { username, password } = generateCredentials(); // Generate username and password

      // Save employee data with generated username and password
      const newEmployee = {
        ...employee,
        username,
        password,
        profilePhoto: employee.profilePhoto ? URL.createObjectURL(employee.profilePhoto) : "No file chosen"
      };

      setEmployees([...employees, newEmployee]); // Add employee to employees list
      setEmployee({
        name: "",
        designation: "",
        joiningDate: "",
        email: "",
        profilePhoto: null,
      }); // Reset form after submission
    } else {
      alert("Please fill in all the details.");
    }
  };

  // Handle delete employee
  const handleDelete = (index) => {
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  // Handle edit employee
  const handleEdit = (index) => {
    const employeeToEdit = employees[index];
    setEmployee({
      name: employeeToEdit.name,
      designation: employeeToEdit.designation,
      joiningDate: employeeToEdit.joiningDate,
      email: employeeToEdit.email,
      profilePhoto: null, // You can update this if needed
    });

    // Remove employee from the list to avoid duplicate during edit
    const updatedEmployees = employees.filter((_, i) => i !== index);
    setEmployees(updatedEmployees);
  };

  return (
    <div className="container mt-5">
      {/* Employee Registration Form */}
      <div className="admin-dashboard mb-5">
        <h2>Create Employee Profile</h2>
        <form onSubmit={handleSubmit} className="border p-4 rounded">
          <div className="form-group">
            <label>Name</label>
            <input
              type="text"
              name="name"
              value={employee.name}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Designation</label>
            <input
              type="text"
              name="designation"
              value={employee.designation}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Joining Date</label>
            <input
              type="date"
              name="joiningDate"
              value={employee.joiningDate}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Email</label>
            <input
              type="email"
              name="email"
              value={employee.email}
              onChange={handleInputChange}
              className="form-control"
              required
            />
          </div>
          <div className="form-group">
            <label>Profile Photo</label>
            <input
              type="file"
              onChange={handleFileChange}
              className="form-control-file"
              required
            />
          </div>
          <button type="submit" className="btn btn-primary">Create Profile</button>
        </form>
      </div>

      {/* View Employees Table */}
      <div className="section">
        <h2>View Employees</h2>
        <table className="table table-bordered">
          <thead className="thead-dark">
            <tr>
              <th>Image</th>
              <th>Name</th>
              <th>Designation</th>
              <th>Email</th>
              <th>Joining Date</th>
              <th>Username</th>
              <th>Password</th>
              <th>Actions</th>
            </tr>
          </thead>
          <tbody>
            {employees.length > 0 ? (
              employees.map((emp, index) => (
                <tr key={index}>
                  <td>
                    {/* Display the uploaded image safely */}
                    <img
                      src={emp.profilePhoto !== "No file chosen" ? emp.profilePhoto : ""}
                      alt="Employee Image"
                      width="50"
                      height="50"
                      className="img-thumbnail"
                    />
                  </td>
                  <td>{emp.name}</td>
                  <td>{emp.designation}</td>
                  <td>{emp.email}</td>
                  <td>{emp.joiningDate}</td>
                  <td>{emp.username}</td>
                  <td>{emp.password}</td>
                  <td className="actions">
                    <button onClick={() => handleEdit(index)} className="btn btn-warning btn-sm mr-2">Edit</button>
                    <button onClick={() => handleDelete(index)} className="btn btn-danger btn-sm">Delete</button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="8">No employees registered yet.</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ViewEmployees;
