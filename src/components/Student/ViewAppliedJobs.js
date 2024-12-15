const ViewAppliedJobs = ({ appliedJobs }) => (
    <div className="section">
      <h2>Applied Jobs</h2>
      <table className="table">
        <thead>
          <tr>
            <th>Sr. No.</th> {/* Added Serial Number Column */}
            <th>Job Title</th>
            <th>Status</th>
          </tr>
        </thead>
        <tbody>
          {appliedJobs.map((job, index) => (
            <tr key={index}>
              <td>{index + 1}</td> {/* Display Serial Number */}
              <td>{job.title}</td>
              <td>{job.status}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
  
  
  export default ViewAppliedJobs;
  