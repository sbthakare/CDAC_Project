import React, { useState } from "react";
import jsPDF from "jspdf";
import "jspdf-autotable";

const FormComponent = () => {
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
    Skill: "",
    certifications: "",
    hobbies: "",
    resume: null,
  });

  const [errors, setErrors] = useState({});

  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleFileChange = (e) => {
    const { id, files } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: files[0],
    }));
  };

<<<<<<< HEAD
  const validateForm = () => {
    let formErrors = {};
    let formIsValid = true;

    // Required Fields
    const requiredFields = [
      'firstName', 'lastName', 'place', 'dob', 'gender', 'adharNo', 'linkedin',
      'educationStream', 'educationInstitute', 'educationBoard', 'educationAdmissionYear',
      'educationPassingYear', 'educationPercentage', 'projectTitle', 'projectPlatform', 'projectDescription',
      'Skill', 'certifications', 'hobbies', 'resume'
    ];

    requiredFields.forEach(field => {
      if (!formData[field]) {
        formErrors[field] = 'This field is required';
        formIsValid = false;
      }
    });

    // Aadhar Number: must be 12 digits
    if (formData.adharNo && !/^\d{12}$/.test(formData.adharNo)) {
      formErrors.adharNo = 'Aadhar number must be 12 digits';
      formIsValid = false;
    }

    // LinkedIn Profile: must be a valid URL
    if (formData.linkedin && !/^https?:\/\/(www\.)?linkedin\.com\/.*$/.test(formData.linkedin)) {
      formErrors.linkedin = 'Please enter a valid LinkedIn profile URL';
      formIsValid = false;
    }

    // Percentage: Must be a valid number between 0 and 100
    if (formData.educationPercentage && (formData.educationPercentage < 0 || formData.educationPercentage > 100)) {
      formErrors.educationPercentage = 'Percentage must be between 0 and 100';
      formIsValid = false;
    }

    setErrors(formErrors);
    return formIsValid;
=======
  const validateInputs = () => {
    const newErrors = {};
    if (!formData.firstName.trim()) newErrors.firstName = "First name is required.";
    if (!formData.lastName.trim()) newErrors.lastName = "Last name is required.";
    if (!formData.place.trim()) newErrors.place = "Place is required.";
    if (!formData.dob) newErrors.dob = "Date of birth is required.";
    if (!formData.gender) newErrors.gender = "Gender is required.";
    if (!formData.adharNo.trim()) newErrors.adharNo = "Aadhar number is required.";
    if (!formData.linkedin.trim()) newErrors.linkedin = "LinkedIn profile is required.";
    return newErrors;
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const newErrors = validateInputs();
    if (Object.keys(newErrors).length > 0) {
      setErrors(newErrors);
    } else {
      setErrors({});
      alert("Form submitted successfully!");
      // You can send `formData` to your API or handle it as needed
    }
  };

  const generatePDF = () => {
    const doc = new jsPDF();

    doc.setFontSize(16);
    doc.text("Resume Details", 20, 20);

    doc.setFontSize(12);
    doc.text("Personal Details:", 20, 30);
    const personalDetails = [
      ["First Name", formData.firstName],
      ["Last Name", formData.lastName],
      ["Place", formData.place],
      ["Date of Birth", formData.dob],
      ["Gender", formData.gender],
      ["Aadhar Number", formData.adharNo],
      ["LinkedIn", formData.linkedin],
    ];
    doc.autoTable({
      head: [["Field", "Value"]],
      body: personalDetails,
      startY: 35,
    });

    doc.text("Educational Details:", 20, doc.lastAutoTable.finalY + 10);
    const educationDetails = [
      ["Stream/Branch", formData.educationStream],
      ["Institute", formData.educationInstitute],
      ["Board/University", formData.educationBoard],
      ["Admission Year", formData.educationAdmissionYear],
      ["Passing Year", formData.educationPassingYear],
      ["Percentage", formData.educationPercentage],
    ];
    doc.autoTable({
      head: [["Field", "Value"]],
      body: educationDetails,
      startY: doc.lastAutoTable.finalY + 15,
    });

    doc.text("Project Details:", 20, doc.lastAutoTable.finalY + 10);
    const projectDetails = [
      ["Project Title", formData.projectTitle],
      ["Platform/Technology", formData.projectPlatform],
      ["Description", formData.projectDescription],
      ["Link", formData.projectLink],
    ];
    doc.autoTable({
      head: [["Field", "Value"]],
      body: projectDetails,
      startY: doc.lastAutoTable.finalY + 15,
    });

    doc.text("Skills, Certifications, and Hobbies:", 20, doc.lastAutoTable.finalY + 10);
    const additionalDetails = [
      ["Skills", formData.Skill],
      ["Certifications", formData.certifications],
      ["Hobbies", formData.hobbies],
    ];
    doc.autoTable({
      head: [["Field", "Value"]],
      body: additionalDetails,
      startY: doc.lastAutoTable.finalY + 15,
    });

    doc.save("Resume.pdf");
  };

<<<<<<< HEAD
  return (
    <div className="section form-container">
      <form onSubmit={handleSubmit}>
        {/* Personal Details */}
        <div className="mb-3">
          <h3 className="text-center">Personal Details</h3>
          <label htmlFor="firstName" className="form-label">First Name</label>
          <input
            type="text"
            className="form-control"
            id="firstName"
            value={formData.firstName}
            onChange={handleInputChange}
            placeholder="Enter your first name"
          />
          {errors.firstName && <small className="text-danger">{errors.firstName}</small>}
=======
    return (
      <div className="section">
        <form onSubmit={handleSubmit}>
          {/* Personal Details */}
          <div className="mb-3">
            <h3 className="text-center">Personal Details</h3>
            <label htmlFor="firstName" className="form-label">
              First Name
            </label>
            <input
              type="text"
              className="form-control"
              id="firstName"
              value={formData.firstName}
              onChange={handleInputChange}
              placeholder="Enter your first name"
            />
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

            <label htmlFor="lastName" className="form-label">
              Last Name
            </label>
            <input
              type="text"
              className="form-control"
              id="lastName"
              value={formData.lastName}
              onChange={handleInputChange}
              placeholder="Enter your last name"
            />

            <label htmlFor="place" className="form-label">
              Place
            </label>
            <input
              type="text"
              className="form-control"
              id="place"
              value={formData.place}
              onChange={handleInputChange}
              placeholder="Enter your place"
            />

            <label htmlFor="dob" className="form-label">
              Date of Birth
            </label>
            <input
              type="date"
              className="form-control"
              id="dob"
              value={formData.dob}
              onChange={handleInputChange}
            />

            <label htmlFor="gender" className="form-label">
              Gender
            </label>
            <select
              className="form-control"
              id="gender"
              value={formData.gender}
              onChange={handleInputChange}
            >
              <option value="">Select Gender</option>
              <option value="Male">Male</option>
              <option value="Female">Female</option>
              <option value="Other">Other</option>
            </select>

            <label htmlFor="adharNo" className="form-label">
              Aadhar Number
            </label>
            <input
              type="text"
              className="form-control"
              id="adharNo"
              value={formData.adharNo}
              onChange={handleInputChange}
              placeholder="Enter your Aadhar number"
            />

            <label htmlFor="linkedin" className="form-label">
              LinkedIn Profile
            </label>
            <input
              type="url"
              className="form-control"
              id="linkedin"
              value={formData.linkedin}
              onChange={handleInputChange}
              placeholder="Enter your LinkedIn profile link"
            />
          </div>

<<<<<<< HEAD
        {/* Educational Details */}
        <div className="mb-3">
          <h3 className="text-center">Educational Details</h3>
          <label htmlFor="educationStream" className="form-label">Stream/Branch</label>
          <input
            type="text"
            className="form-control"
            id="educationStream"
            value={formData.educationStream}
            onChange={handleInputChange}
            placeholder="Enter your stream or branch"
          />
          {errors.educationStream && <small className="text-danger">{errors.educationStream}</small>}
=======
          {/* Education Details */}
          <div className="mb-3">
            <h3 className="text-center">Educational Details</h3>
            <label htmlFor="educationStream" className="form-label">
              Stream/Branch
            </label>
            <input
              type="text"
              className="form-control"
              id="educationStream"
              value={formData.educationStream}
              onChange={handleInputChange}
              placeholder="Enter your stream or branch"
            />
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

            <label htmlFor="educationInstitute" className="form-label">
              Institute
            </label>
            <input
              type="text"
              className="form-control"
              id="educationInstitute"
              value={formData.educationInstitute}
              onChange={handleInputChange}
              placeholder="Enter your institute name"
            />

            <label htmlFor="educationBoard" className="form-label">
              Board/University
            </label>
            <input
              type="text"
              className="form-control"
              id="educationBoard"
              value={formData.educationBoard}
              onChange={handleInputChange}
              placeholder="Enter your board or university"
            />

            <label htmlFor="educationAdmissionYear" className="form-label">
              Admission Year
            </label>
            <input
              type="number"
              className="form-control"
              id="educationAdmissionYear"
              value={formData.educationAdmissionYear}
              onChange={handleInputChange}
              placeholder="Enter your admission year"
            />

            <label htmlFor="educationPassingYear" className="form-label">
              Passing Year
            </label>
            <input
              type="number"
              className="form-control"
              id="educationPassingYear"
              value={formData.educationPassingYear}
              onChange={handleInputChange}
              placeholder="Enter your passing year"
            />
            <label htmlFor="educationPercentage" className="form-label">
              Percentage
            </label>
            <input
              type="number"
              className="form-control"
              id="educationPercentage"
              value={formData.educationPercentage}
              onChange={handleInputChange}
              placeholder="Enter your percentage"
            />
          </div>

          {/* Project Details */}
          <div className="mb-3">
            <h3 className="text-center">Project Details</h3>
            <label htmlFor="projectTitle" className="form-label">
              Project Title
            </label>
            <input
              type="text"
              className="form-control"
              id="projectTitle"
              value={formData.projectTitle}
              onChange={handleInputChange}
              placeholder="Enter your project title"
            />
            <label htmlFor="projectPlatform" className="form-label">
              Platform/Technology Used
            </label>
            <input
              type="text"
              className="form-control"
              id="projectPlatform"
              value={formData.projectPlatform}
              onChange={handleInputChange}
              placeholder="Enter technologies used in the project"
            />

            <label htmlFor="projectDescription" className="form-label">
              Project Description
            </label>
            <textarea
              className="form-control"
              id="projectDescription"
              value={formData.projectDescription}
              onChange={handleInputChange}
              rows="3"
              placeholder="Describe your project"
            ></textarea>

            <label htmlFor="projectLink" className="form-label">
              Project Link
            </label>
            <input
              type="url"
              className="form-control"
              id="projectLink"
              value={formData.projectLink}
              onChange={handleInputChange}
              placeholder="Enter project link"
            />
          </div>

<<<<<<< HEAD
          <label htmlFor="projectDescription" className="form-label">Project Description</label>
          <textarea
            className="form-control"
            id="projectDescription"
            value={formData.projectDescription}
            onChange={handleInputChange}
            rows="3"
            placeholder="Enter project description"
          ></textarea>
          {errors.projectDescription && <small className="text-danger">{errors.projectDescription}</small>}
=======
          {/* Skills, Certifications and Hobbies */}
          <div className="mb-3">
            <h3 className="text-center">Skills, Certifications and Hobbies</h3>
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

            <label htmlFor="Skill" className="form-label">
              Skills
            </label>
            <textarea
              className="form-control"
              id="Skill"
              value={formData.Skill}
              onChange={handleInputChange}
              rows="2"
              placeholder="Enter your skills with comma separated"
            ></textarea>

<<<<<<< HEAD
        {/* Additional Details */}
        <div className="mb-3">
          <h3 className="text-center">Additional Details</h3>
          <label htmlFor="Skill" className="form-label">Skills</label>
          <input
            type="text"
            className="form-control"
            id="Skill"
            value={formData.Skill}
            onChange={handleInputChange}
            placeholder="Enter your skills"
          />
          {errors.Skill && <small className="text-danger">{errors.Skill}</small>}

          <label htmlFor="certifications" className="form-label">Certifications</label>
          <input
            type="text"
            className="form-control"
            id="certifications"
            value={formData.certifications}
            onChange={handleInputChange}
            placeholder="Enter your certifications"
          />
          {errors.certifications && <small className="text-danger">{errors.certifications}</small>}

          <label htmlFor="hobbies" className="form-label">Hobbies</label>
          <input
            type="text"
            className="form-control"
            id="hobbies"
            value={formData.hobbies}
            onChange={handleInputChange}
            placeholder="Enter your hobbies"
          />
          {errors.hobbies && <small className="text-danger">{errors.hobbies}</small>}

          <label htmlFor="resume" className="form-label">Upload Resume</label>
          <input
            type="file"
            className="form-control"
            id="resume"
            onChange={handleFileChange}
          />
          {errors.resume && <small className="text-danger">{errors.resume}</small>}
        </div>

        <div className="text-center">
          <button type="submit" className="btn btn-primary m-3">Submit</button>
          <button type="button" className="btn btn-success m-3" onClick={generatePDF}>Generate PDF</button>
        </div>
      </form>
    </div>
  );
=======
            <label htmlFor="certifications" className="form-label">
              Certifications
            </label>
            <textarea
              className="form-control"
              id="certifications"
              value={formData.certifications}
              onChange={handleInputChange}
              rows="2"
              placeholder="List your certifications"
            ></textarea>

            <label htmlFor="hobbies" className="form-label">
              Hobbies
            </label>
            <textarea
              className="form-control"
              id="hobbies"
              value={formData.hobbies}
              onChange={handleInputChange}
              rows="2"
              placeholder="List your hobbies"
            ></textarea>
          </div>

          {/* Resume Upload */}
          <div className="mb-3">
            <h3 className="text-center">Resume Upload</h3>
            <label htmlFor="resume" className="form-label">
              Upload Resume
            </label>
            <input
              type="file"
              className="form-control"
              id="resume"
              onChange={handleFileChange}
            />
          </div>

          {/* Submit Button */}
          <div className="d-flex justify-content-between mt-2">
            <button
              type="submit"
              className="btn btn-primary w-auto min-w-100 px-3"
            >
              Submit
            </button>
            <button
              type="button"
              className="btn btn-success w-auto min-w-100 px-3 ml-2"
              onClick={generatePDF}
            >
              Generate Resume PDF
            </button>
          </div>
        </form>
      </div>
    );
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
};

export default FormComponent;
