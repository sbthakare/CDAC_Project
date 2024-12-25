import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css"; // Import Bootstrap CSS

const PostJob = ({ onPostJob }) => {
  const [jobTitle, setJobTitle] = useState("");
  const [jobDescription, setJobDescription] = useState("");
  const [requiredSkills, setRequiredSkills] = useState("");
  const [salary, setSalary] = useState("");
  const [errors, setErrors] = useState({
    jobTitle: "",
    jobDescription: "",
    requiredSkills: "",
    salary: "",
  });

  const validateForm = () => {
    const newErrors = {
      jobTitle: jobTitle ? "" : "Job Title is required.",
      jobDescription: jobDescription ? "" : "Job Description is required.",
      requiredSkills: requiredSkills ? "" : "Required Skills are required.",
      salary: salary ? "" : "Salary is required.",
    };
    setErrors(newErrors);
    return Object.values(newErrors).every((error) => error === "");
  };

  const postJob = () => {
    if (!validateForm()) {
      return; // Stop if validation fails
    }

    const job = {
      title: jobTitle,
      description: jobDescription,
      skills: requiredSkills,
      salary: salary,
    };
    onPostJob(job); // Passing the job details to the parent component
    alert("Job posted successfully!");
  };

  return (
    <div className="container mt-5">
      <div className="section">
        <h2 className="text-center mb-4">Post Job</h2>
        <div className="card p-4">
          <div className="mb-3">
            <label htmlFor="jobTitle" className="form-label">Job Title:</label>
            <input
              type="text"
              id="jobTitle"
              className="form-control"
              value={jobTitle}
              onChange={(e) => setJobTitle(e.target.value)}
              placeholder="Enter job title"
            />
            {errors.jobTitle && (
              <p className="text-danger mt-2">{errors.jobTitle}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="jobDescription" className="form-label">Job Description:</label>
            <textarea
              id="jobDescription"
              className="form-control"
              rows="5"
              value={jobDescription}
              onChange={(e) => setJobDescription(e.target.value)}
              placeholder="Enter job description"
            />
            {errors.jobDescription && (
              <p className="text-danger mt-2">{errors.jobDescription}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="requiredSkills" className="form-label">Required Skills:</label>
            <input
              type="text"
              id="requiredSkills"
              className="form-control"
              value={requiredSkills}
              onChange={(e) => setRequiredSkills(e.target.value)}
              placeholder="Enter required skills"
            />
            {errors.requiredSkills && (
              <p className="text-danger mt-2">{errors.requiredSkills}</p>
            )}
          </div>

          <div className="mb-3">
            <label htmlFor="salary" className="form-label">Annual Salary:</label>
            <input
              type="number"
              id="salary"
              className="form-control"
              value={salary}
              onChange={(e) => setSalary(e.target.value)}
              placeholder="Enter salary"
            />
            {errors.salary && (
              <p className="text-danger mt-2">{errors.salary}</p>
            )}
          </div>

          <div className="text-center">
            <button className="btn btn-primary" onClick={postJob}>Post Job</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PostJob;
