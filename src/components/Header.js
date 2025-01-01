import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
<<<<<<< HEAD
import logo from "../assests/company logo.png";
=======
import logo from "../assests/logo2.png";
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

<<<<<<< HEAD
  // Check the current pathname to decide which button to show
=======
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
  const isEmployeeDashboard = location.pathname === "/employeepage";
  const isAdminDashboard = location.pathname === "/admingpage";
  const isStudentDashboard = location.pathname === "/studentpage";

<<<<<<< HEAD
  // Function for the Sign Out button
=======
  // Function for Sign Out button
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
  const handleSignOut = () => {
    alert("You have been signed out!");
    navigate("/loginpage");
  };

  return (
<<<<<<< HEAD
    <>
      <style>
        {`
          .navbar {
            box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
          }

          .navbar-brand img {
            max-height: 50px;
            transition: transform 0.3s;
          }

          .navbar-brand img:hover {
            transform: scale(1.05);
          }

          .nav-link {
            font-weight: 500;
            color: #333 !important;
            transition: color 0.3s ease;
          }

          .nav-link:hover {
            color: #007bff !important;
          }

          .btn-primary {
            background-color: #007bff;
            border: none;
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .btn-primary:hover {
            background-color: #0056b3;
            transform: scale(1.05);
          }

          .btn-danger {
            transition: background-color 0.3s ease, transform 0.2s ease;
          }

          .btn-danger:hover {
            background-color: #b20000;
            transform: scale(1.05);
          }
        `}
      </style>

      <nav className="navbar navbar-expand-lg navbar-light bg-light">
        <div className="container">
          {/* Logo */}
          <Link className="navbar-brand" to="/">
            <img src={logo} alt="Company Logo" />
          </Link>

          {/* Toggler button for smaller screens */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Navigation links */}
          <div className="collapse navbar-collapse" id="navbarNav">
            <ul className="navbar-nav me-auto">
              <li className="nav-item">
                <Link className="nav-link active" to="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/aboutpage">
                  About
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="/contactpage">
                  Contact
                </Link>
              </li>
            </ul>

            {/* Conditional rendering for Sign Up/Sign Out buttons */}
            <div>
              {isEmployeeDashboard || isAdminDashboard || isStudentDashboard ? (
                <button className="btn btn-danger" onClick={handleSignOut}>
                  Sign Out
                </button>
              ) : (
                <button
                  className="btn btn-primary"
                  onClick={() => navigate("/loginpage")}
                >
                  LOGIN
                </button>
              )}
            </div>
          </div>
        </div>
      </nav>
    </>
=======
    <nav className="navbar navbar-expand-lg navbar-light" style={{ backgroundColor: "transparent", boxShadow: "none" }}>
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="60" height="50" />
        </Link>

        {/* Navigation links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav me-auto">
            <li className="nav-item">
              <Link className="nav-link active" to="/">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#Aboutsection">
                About
              </a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#contactsection">
                Contact
              </a>
            </li>
          </ul>

          <div>
            {isEmployeeDashboard || isAdminDashboard || isStudentDashboard ? (
              // Sign Out button
              <button className="btn btn-danger" onClick={handleSignOut}>
                Sign Out
              </button>
            ) : (
              // Show Sign Up button on other pages
              <button
                className="btn btn-primary"
                onClick={() => navigate("/loginpage")}
              >
                Sign Up
              </button>
            )}
          </div>
        </div>
      </div>
    </nav>
>>>>>>> 9dbc3f19e2ccd07cb7ba816d2ee5a95562f10783
  );
}
