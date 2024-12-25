import React from "react";

const Profile = ({ profile, onProfileChange, saveProfile }) => (
  <div className="section">
    <h2>Employee Profile</h2>
    <div className="card p-3">
      <div className="mb-3">
        <label htmlFor="employeeName" className="form-label">
          Name:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeeName"
          name="name"
          value={profile.name}
          onChange={onProfileChange}
          placeholder="Enter your name"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeeEmail" className="form-label">
          Email:
        </label>
        <input
          type="email"
          className="form-control"
          id="employeeEmail"
          name="email"
          value={profile.email}
          onChange={onProfileChange}
          placeholder="Enter your email"
        />
      </div>
      <div className="mb-3">
        <label htmlFor="employeePosition" className="form-label">
          Position:
        </label>
        <input
          type="text"
          className="form-control"
          id="employeePosition"
          name="position"
          value={profile.position}
          onChange={onProfileChange}
          placeholder="Enter your position"
        />
      </div>
      <button className="btn btn-primary" onClick={saveProfile}>
        Save Profile
      </button>
    </div>
  </div>
);

export default Profile;
