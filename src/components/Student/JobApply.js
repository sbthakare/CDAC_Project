const JobApply = ({ onApply }) => {
    const jobs = [
      { title: "Frontend Developer",skill:"react", salary: "50,0000/year" },
      { title: "Backend Developer",skill:".Net", salary: "60,0000/year" },
    ];
  
    return (
      <div className="section">
        <h2>Available Jobs</h2>
        <div className="row">
          {jobs.map((job, index) => (
            <div key={index} className="col-md-4 mb-3"> {/* Create a 3-column layout */}
              <div className="card p-3 d-flex align-items-center justify-content-between">
                <div>
                  <h4>{job.title}</h4>
                 < p>Skills:{job.skill}</p>
                  <p>Salary: {job.salary}</p>
                </div>
                <button
                  className="btn btn-primary"
                  onClick={() => onApply({ title: job.title,  status: "Applied" })}
                >
                  Apply
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    );
  };
  
  export default JobApply;
  