import React, { useState,useEffect } from "react";

const JobAlert = () => {
  const [jobs, setJobs] = useState([]);

  useEffect(() => {
    const storedJobs = JSON.parse(localStorage.getItem("postedJobs")) || [];
    setJobs(storedJobs);
  }, []);

  return (
    <div className="job-alert-container">
      <h2>Posted Jobs</h2>
      {jobs.length > 0 ? (
        <table className="table">
          <thead>
            <tr>
              <th>Title</th>
              <th>Description</th>
              <th>Skills</th>
              <th>Salary</th>
            </tr>
          </thead>
          <tbody>
            {jobs.map((job, index) => (
              <tr key={index}>
                <td>{job.title}</td>
                <td>{job.description}</td>
                <td>{job.skills}</td>
                <td>₹{job.salary}</td>
              </tr>
            ))}
          </tbody>
        </table>
      ) : (
        <p>No jobs posted yet.</p>
      )}
    </div>
  );
};
  

export default JobAlert;
