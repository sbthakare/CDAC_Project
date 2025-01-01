import React, { useState, useEffect } from "react";
import axios from "axios"; // Import axios
import { useNavigate } from "react-router-dom"; // Import useNavigate for redirection
import logo from "../assests/img1.jpg";
import l1 from "../assests/jobcategorylogo/accounts.png";
import l2 from "../assests/jobcategorylogo/human-resources.png";
import l3 from "../assests/jobcategorylogo/megaphone.png";
import l4 from "../assests/jobcategorylogo/social-media.png";
import l5 from "../assests/jobcategorylogo/software-engineer.png";
import l6 from "../assests/jobcategorylogo/technical.png";
import l7 from "../assests/jobcategorylogo/test.png";
import l8 from "../assests/jobcategorylogo/web-design.png";
import contactimg from "../assests/contact.jpg";
import aboutimg from "../assests/homeimg2.jpg";

export default function Home() {
<<<<<<< HEAD
  const [jobs, setJobs] = useState([]);
  const [searchTerm, setSearchTerm] = useState("");
  const [filteredJobs, setFilteredJobs] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState("");

  const navigate = useNavigate(); // Initialize useNavigate
=======
  const [jobs] = useState([
    { id: 1, title: "Software Engineer", salary: "3 LPA", logo: "https://via.placeholder.com/100" },
    { id: 2, title: "Marketing Specialist", salary: "2.5 LPA", logo: "https://via.placeholder.com/100" },
    { id: 3, title: "UI/UX Designer", salary: "3 LPA", logo: "https://via.placeholder.com/100" },
    { id: 4, title: "IT Support Technician", salary: "3.5 LPA", logo: "https://via.placeholder.com/100" },
    { id: 5, title: "HR Manager", salary: "5 LPA", logo: "https://via.placeholder.com/100" },
    { id: 6, title: "Finance Analyst", salary: "4 LPA", logo: "https://via.placeholder.com/100" },
    { id: 7, title: "DevOps Engineer", salary: "9 LPA", logo: "https://via.placeholder.com/100" },
    { id: 8, title: "Graphic Designer", salary: "3.8 LPA", logo: "https://via.placeholder.com/100" },
  ]);
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

  const jobCategories = [
    { name: "Software Development", image: l5 },
    { name: "Marketing", image: l4 },
    { name: "Web Design", image: l8 },
    { name: "Sales", image: l3 },
    { name: "IT Support", image: l6 },
    { name: "Finance", image: l1 },
    { name: "Software Testing", image: l7 },
    { name: "HR", image: l2 },
  ];

  useEffect(() => {
    const fetchJobs = async () => {
      try {
        const response = await axios.get("http://localhost:5119/api/job/list");
        setJobs(response.data);
        setFilteredJobs(response.data);
        setLoading(false);
      } catch (err) {
        console.error("Error fetching jobs:", err);
        setError("Failed to fetch jobs. Please try again later.");
        setLoading(false);
      }
    };

    fetchJobs();
  }, []);

  const handleSearch = (e) => {
    const term = e.target.value.toLowerCase();
    setSearchTerm(term);

    const filtered = jobs.filter((job) =>
      job.title.toLowerCase().includes(term)
    );

    setFilteredJobs(filtered);
  };

  // Handle Apply button click (redirect to login page)
  const handleApplyClick = () => {
    navigate("/loginpage"); // Navigate to login page
  };

  return (
    <div className="homepage container-fluid">
      {/* Header Section */}
      <div className="row align-items-center">
        <div className="col-xl-6 text-section">
<<<<<<< HEAD
          <h1>
            Discover Your Dream Job
            <span className="company-highlight"> with Paarsh Infotech</span>
          </h1>
          <p>
=======
          <h1 className="header-title">
            Discover Your Dream Job
            <span className="company-highlight" id="typing-text">
              with Paarsh Infotech
            </span>
          </h1>
          <p className="header-description">
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
            Explore thousands of job listings tailored to your skills and
            preferences. Join now and take the next step in your career journey.
          </p>

          <div className="search-bar d-flex">
            <input
              type="text"
              value={searchTerm}
              onChange={handleSearch}
              placeholder="Search for jobs (e.g., Software Developer)"
              className="search-input form-control"
            />
            <button className="btn btn-primary search-button">Search</button>
          </div>
        </div>
        <div className="col-xl-6 image-section">
          <img src={logo} alt="Dream Job" className="img-fluid" />
        </div>
      </div>
     <br></br>

<<<<<<< HEAD
     {/* Job Listings Section */}
     <div className="jobs-section container mt-4">
        <h4 className="text-center mb-4">Job Listings</h4>
        {loading ? (
          <p className="text-center">Loading jobs...</p>
        ) : error ? (
          <p className="text-center text-danger">{error}</p>
        ) : (
          <div className="row">
            {filteredJobs.map((job) => (
              <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={job.id}>
                <div className="card text-center" style={{ width: "18rem" }}>
                  <img
                    src={`https://via.placeholder.com/150?text=${job.title}`}
                    className="card-img-top"
                    alt={job.title}
                    style={{ height: "100px", objectFit: "contain" }}
                  />
                  <div className="card-body">
                    <h5 className="card-title">{job.title}</h5>
                    <p className="card-text">Salary: {job.salary}</p>
                    {/* Apply Button */}
                    <button
                      className="btn btn-primary"
                      onClick={handleApplyClick}
                    >
                      Apply
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      

      {/* How It Works Section */}
      <div className="how-it-works container mt-5">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 1</h5>
                <p className="card-text">
                  Register on the platform and create your profile.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 2</h5>
                <p className="card-text">
                  Apply for jobs that match your skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 3</h5>
                <p className="card-text">
                  Get connected with recruiters and land your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

=======
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
      {/* Popular Job Categories Section */}
      <div className="job-categories container mt-5">
        <h2 className="text-center mb-4">Popular Job Categories</h2>
        <div className="row">
          {jobCategories.map((category, index) => (
            <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={index}>
              <div className="card category-card text-center p-3">
                <img
                  src={category.image}
                  alt={category.name}
                  className="card-img-top mx-auto mb-3"
                />
                <div className="card-body">
                  <h5 className="card-title">{category.name}</h5>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

<<<<<<< HEAD
      <div className="container mt-5">
  <h2 className="text-center">Why Paarsh Infotech ?</h2> <br />
  <div className="row">
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Learning & Growth</h4>
          <p className="card-text">Gain hands-on experience and learn from industry experts in real-world projects.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Internship Opportunities</h4>
          <p className="card-text">Get the chance to work as an intern, enhancing your resume with valuable industry experience.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Skill Development</h4>
          <p className="card-text">Develop technical and soft skills that will set you apart in the competitive job market.</p>
        </div>
      </div>
    </div>
    <div className="col-md-3 text-center">
      <div className="card border-primary">
        <div className="card-body">
          <h4 className="card-title">Career Advancement</h4>
          <p className="card-text">Access job placement support and career guidance to help launch your professional career.</p>
        </div>
      </div>
    </div>
  </div>
</div>
=======
      {/* How It Works Section */}
      <div className="how-it-works container mt-5 how-it-works-section">
        <h2 className="text-center mb-4">How It Works</h2>
        <div className="row justify-content-center">
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 1</h5>
                <p className="card-text">
                  Register on the platform and create your profile.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 2</h5>
                <p className="card-text">
                  Search and apply for jobs that match your skills.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-4 mb-4">
            <div className="card text-center h-100 how-it-works-card shadow">
              <div className="card-body">
                <h5 className="card-title">Step 3</h5>
                <p className="card-text">
                  Get connected with recruiters and land your dream job.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

      {/* Job Listings Carousel */}
      <div className="jobs-section container mt-4">
        <h4 className="text-center mb-4">Job Listings</h4>
        <Carousel>
          {jobChunks.map((chunk, index) => (
            <Carousel.Item key={index}>
              <div className="row justify-content-center">
                {chunk.map((job) => (
                  <div className="col-lg-3 col-md-4 col-sm-6 mb-3" key={job.id}>
                    <div
                      className="card text-center"
                      style={{ width: "18rem" }}
                    >
                      <img
                        src={job.logo}
                        className="card-img-top"
                        alt={job.title}
                        style={{ height: "100px", objectFit: "contain" }}
                      />
                      <div className="card-body">
                        <h5 className="card-title">{job.title}</h5>
                        <p className="card-text">{job.salary}</p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </Carousel.Item>
          ))}
        </Carousel>
      </div>

<<<<<<< HEAD

      {/* About and Contact Section */}
      <div className="about-contact-section container mt-5">
        {/* About Section */}
        <h4 className="mb-3 text-center" id="Aboutsection"><a href="/aboutpage">About Us</a></h4><br/>
        <div className="row g-4 align-items-center about-section">
=======
      {/* About and Contact Section */}
      <div className="about-section container mt-5">
        <h4 className="mb-3 text-center" id="Aboutsection">
          About Us
        </h4>
        <div className="row g-4 align-items-center">
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
          <div className="col-md-6 about-text">
            <p>
              Paarsh Infotech is a leading company dedicated to bridging the gap
              between job seekers and employers. We strive to create
              opportunities and provide platforms for talented individuals to
              showcase their skills and land their dream jobs.
            </p>
            <p>
              With a vision to connect the best talent with top companies, we
<<<<<<< HEAD
              ensure a seamless hiring process and career growth for
              individuals in various domains.
            </p>
          </div>
          <div className="col-md-6 about-image">
            <img
              src={contactimg}
              alt="About Us"
              className="img-fluid rounded"
            />
          </div>
        </div>

        {/* Contact Section */}
        <div className="row g-4 align-items-center mt-5 contact-section">
          <h4 className="mb-3 text-center" id="contactsection"><a href="/contactpage">Contact Us</a></h4>
          <div className="col-md-6 contact-image">
            <img
              src={aboutimg}
=======
              ensure a seamless hiring process and career growth for individuals
              in various domains.
            </p>
          </div>

          <div className="col-md-6 about-image">
            <img src={aboutimg} alt="About Us" className="img-fluid rounded" />
          </div>
        </div>
      </div>
      <div className="contact-section container mt-5">
        <h4 className="mb-3 text-center" id="contactsection">
          Contact Us
        </h4>
        <div className="row g-4 align-items-center">
          <div className="col-md-6 contact-image">
            <img
              src={contactimg}
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
              alt="Contact Us"
              className="img-fluid rounded"
            />
          </div>
          <div className="col-md-6 contact-form">
<<<<<<< HEAD
          <p text-center>Let’s Work Together!<br/>
         Tell us what you are Looking for!<br/>
        We believe in building Trust and Relation first.</p>
        
=======
            <form className="form-container">
              <div className="mb-3">
                <label htmlFor="name" className="form-label">
                  Name
                </label>
                <input
                  type="text"
                  className="form-control"
                  id="name"
                  placeholder="Enter your name"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="email" className="form-label">
                  Email
                </label>
                <input
                  type="email"
                  className="form-control"
                  id="email"
                  placeholder="Enter your email"
                />
              </div>
              <div className="mb-3">
                <label htmlFor="message" className="form-label">
                  Message
                </label>
                <textarea
                  className="form-control"
                  id="message"
                  rows="3"
                  placeholder="Enter your message"
                ></textarea>
              </div>
              <button type="submit" className="btn btn-primary send-button">
                Send Message
              </button>
            </form>
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
          </div>
        </div>
      </div>
    </div>
  );
}
