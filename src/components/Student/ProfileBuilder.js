import React, { useState } from "react";
import jsPDF from "jspdf";

const ProfileBuilder = () => {
    const [formData, setFormData] = useState({
      firstName: "",
      lastName: "",
      place: "",
      dob: "",
      gender: "",
      adharNo: "",
      linkedin: "",
      educationStream: "",
      educationInstitute: "",
      educationBoard: "",
      educationAdmissionYear: "",
      educationPassingYear: "",
      educationPercentage: "",
      projectTitle: "",
      projectPlatform: "",
      projectDescription: "",
      projectLink: "",
      certifications: "",
      hobbies: "",
      resume: null,
    });
  
    // Handle form input changes
    const handleInputChange = (e) => {
      const { id, value } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: value,
      }));
    };
  
    // Handle file input change
    const handleFileChange = (e) => {
      const { id, files } = e.target;
      setFormData((prevData) => ({
        ...prevData,
        [id]: files[0],
      }));
    };
  
    // Generate PDF resume
    const generatePDF = () => {
      const doc = new jsPDF();
  
      doc.setFontSize(18);
      doc.text("Resume", 20, 20);
  
      doc.setFontSize(12);
      doc.text(`Name: ${formData.firstName} ${formData.lastName}`, 20, 30);
      doc.text(`Place: ${formData.place}`, 20, 40);
      doc.text(`Date of Birth: ${formData.dob}`, 20, 50);
      doc.text(`Gender: ${formData.gender}`, 20, 60);
      doc.text(`Aadhar Number: ${formData.adharNo}`, 20, 70);
      doc.text(`LinkedIn Profile: ${formData.linkedin}`, 20, 80);
  
      doc.text("Education", 20, 100);
      doc.text(`Stream/Branch: ${formData.educationStream}`, 20, 110);
      doc.text(`Institute: ${formData.educationInstitute}`, 20, 120);
      doc.text(`Board/University: ${formData.educationBoard}`, 20, 130);
      doc.text(`Admission Year: ${formData.educationAdmissionYear}`, 20, 140);
      doc.text(`Passing Year: ${formData.educationPassingYear}`, 20, 150);
      doc.text(`Percentage: ${formData.educationPercentage}`, 20, 160);
  
      doc.text("Project Details", 20, 180);
      doc.text(`Title: ${formData.projectTitle}`, 20, 190);
      doc.text(`Platform/Technology: ${formData.projectPlatform}`, 20, 200);
      doc.text(`Description: ${formData.projectDescription}`, 20, 210);
      doc.text(`Project Link: ${formData.projectLink}`, 20, 220);
  
      doc.text(`Skills: ${formData.Skill}`, 20, 240);
     
      doc.text(`Certifications: ${formData.certifications}`, 20, 260);
  
      doc.text(`Hobbies: ${formData.hobbies}`, 20, 280);
  
      doc.save("resume.pdf");
    };
  
    return (
      <div
        className="section"
        style={{
          maxHeight: "calc(100vh - 20px)",
          overflowY: "auto",
          overflowX: "hidden",
          paddingRight: "10px",
        }}
      >
        <form>
          {/* Personal Details */}
          <div className="mb-3">
            <h3 className="text-center">Personal Details</h3>
            <label htmlFor="firstName" className="form-label">First Name</label>
            <input type="text"
             className="form-control" 
             id="firstName" 
             value={formData.firstName}
             onChange={handleInputChange}
            placeholder="Enter your first name" />
            
            <label htmlFor="lastName" className="form-label">Last Name</label>
            <input type="text" className="form-control" id="lastName" value={formData.lastName} onChange={handleInputChange} placeholder="Enter your last name" />
            
            <label htmlFor="place" className="form-label">Place</label>
            <input type="text" className="form-control" id="place" value={formData.place} onChange={handleInputChange} placeholder="Enter your place" />
            
            <label htmlFor="dob" className="form-label">Date of Birth</label>
            <input type="date" className="form-control" id="dob" value={formData.dob} onChange={handleInputChange} />
            
            <label htmlFor="gender" className="form-label">Gender</label>
            <select className="form-control" id="gender" value={formData.gender} onChange={handleInputChange}>
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>
  
            <label htmlFor="adharNo" className="form-label">Aadhar Number</label>
            <input type="text" className="form-control" id="adharNo" value={formData.adharNo} onChange={handleInputChange} placeholder="Enter your Aadhar number" />
            
            <label htmlFor="linkedin" className="form-label">LinkedIn Profile</label>
            <input type="url" className="form-control" id="linkedin" value={formData.linkedin} onChange={handleInputChange} placeholder="Enter your LinkedIn profile link" />
          </div>
  
          {/* Education Details */}
          <div className="mb-3">
          <h3 className="text-center">Educational Details</h3>
            <label htmlFor="educationStream" className="form-label">Stream/Branch</label>
            <input type="text" className="form-control" id="educationStream" value={formData.educationStream} onChange={handleInputChange} placeholder="Enter your stream or branch" />
  
            <label htmlFor="educationInstitute" className="form-label">Institute</label>
            <input type="text" className="form-control" id="educationInstitute" value={formData.educationInstitute} onChange={handleInputChange} placeholder="Enter your institute name" />
  
            <label htmlFor="educationBoard" className="form-label">Board/University</label>
            <input type="text" className="form-control" id="educationBoard" value={formData.educationBoard} onChange={handleInputChange} placeholder="Enter your board or university" />
  
            <label htmlFor="educationAdmissionYear" className="form-label">Admission Year</label>
            <input type="number" className="form-control" id="educationAdmissionYear" value={formData.educationAdmissionYear} onChange={handleInputChange} placeholder="Enter your admission year" />
  
            <label htmlFor="educationPassingYear" className="form-label">Passing Year</label>
            <input type="number" className="form-control" id="educationPassingYear" value={formData.educationPassingYear} onChange={handleInputChange} placeholder="Enter your passing year" />
  
            <label htmlFor="educationPercentage" className="form-label">Percentage</label>
            <input type="number" className="form-control" id="educationPercentage" value={formData.educationPercentage} onChange={handleInputChange} placeholder="Enter your percentage" />
          </div>
  
          {/* Project Details */}
          <div className="mb-3">
          <h3 className="text-center">Project Details</h3>
            <label htmlFor="projectTitle" className="form-label">Project Title</label>
            <input type="text" className="form-control" id="projectTitle" value={formData.projectTitle} onChange={handleInputChange} placeholder="Enter your project title" />
  
            <label htmlFor="projectPlatform" className="form-label">Platform/Technology Used</label>
            <input type="text" className="form-control" id="projectPlatform" value={formData.projectPlatform} onChange={handleInputChange} placeholder="Enter technologies used in the project" />
  
            <label htmlFor="projectDescription" className="form-label">Project Description</label>
            <textarea className="form-control" 
            id="projectDescription"
             value={formData.projectDescription} 
             onChange={handleInputChange} rows="3" 
             placeholder="Describe your project"></textarea>
  
            <label htmlFor="projectLink" className="form-label">Project Link</label>
            <input type="url" className="form-control" id="projectLink" value={formData.projectLink} onChange={handleInputChange} placeholder="Enter project link" />
          </div>
  
          {/* Skills Certifications and Hobbies */}
          <div className="mb-3">
          <h3 className="text-center">Skills,Certifications and Hobbies</h3>

          <label htmlFor="Skill" className="form-label">Skills</label>
            <textarea className="form-control" 
            id="Skill"
             value={formData.Skill} 
             onChange={handleInputChange} rows="2" 
             placeholder="Enter your Skill with comma separated"></textarea>

            <label htmlFor="certifications" className="form-label">Certifications</label>
            <textarea className="form-control" id="certifications" value={formData.certifications} onChange={handleInputChange} rows="2" placeholder="List your certifications"></textarea>
  
            <label htmlFor="hobbies" className="form-label">Hobbies</label>
            <textarea className="form-control" id="hobbies" value={formData.hobbies} onChange={handleInputChange} rows="2" placeholder="List your hobbies"></textarea>
          </div>
  
          {/* Resume Upload */}
          <div className="mb-3">
          <h3 className="text-center">Resume upload</h3>
            <label htmlFor="resume" className="form-label">Upload Resume</label>
            <input type="file" className="form-control" id="resume" onChange={handleFileChange} />
          </div>
  
          {/* Submit Button */}
          <div className="d-flex justify-content-between mt-2">
          <button type="submit" className="btn btn-primary w-auto min-w-100 px-3" >Submit</button>
          <button type="button" className="btn btn-success w-auto min-w-100 px-3 ml-2"onClick={generatePDF}>Generate Resume PDF</button>
          </div>
        </form>
      </div>
    );
  };

export default ProfileBuilder;