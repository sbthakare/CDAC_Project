import React, { useState,useEffect } from "react";

const JobAlert = () => {
    // Simulating recently added jobs, you can replace this with real-time data or API call
    const [jobAlerts, setJobAlerts] = useState([
      { title: "Frontend Developer",  posted: "2 hours ago" },
      { title: "Backend Developer",  posted: "5 hours ago" },
      { title: "Full Stack Developer",  posted: "1 day ago" },
    ]);
  
    // Optional: This effect simulates new jobs being added periodically.
    useEffect(() => {
      const interval = setInterval(() => {
        setJobAlerts((prevAlerts) => [
          ...prevAlerts,
          {
            title: `New Job at ${Math.random() > 0.5 ? "XYZ Corp" : "ABC Ltd"}`,
            company: Math.random() > 0.5 ? "XYZ Corp" : "ABC Ltd",
            posted: "Just Now",
          },
        ]);
      }, 60000); // Adds a new job every minute
  
      return () => clearInterval(interval); // Cleanup interval on component unmount
    }, []);
  
    return (
      <div className="section">
        <h2>Job Alerts</h2>
        {jobAlerts.length === 0 ? (
          <p>No new job alerts.</p>
        ) : (
          <div className="row">
            {jobAlerts.map((alert, index) => (
              <div key={index} className="col-md-4 mb-4">
                <div className="card">
                  <div className="card-body">
                    <h5 className="card-title">{alert.title}</h5>
                    <p className="card-text">Posted: {alert.posted}</p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    );
  };
  

export default JobAlert;
