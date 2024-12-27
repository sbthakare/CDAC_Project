import React from "react";
import { Link, useNavigate, useLocation } from "react-router-dom";
import logo from "../assests/logo1.jpg";

export default function Header() {
  const navigate = useNavigate();
  const location = useLocation();

  const isEmployeeDashboard = location.pathname === "/employeepage";
  const isAdminDashboard = location.pathname === "/admingpage";
  const isStudentDashboard = location.pathname === "/studentpage";
  // Function for Sign Out button
  const handleSignOut = () => {
    alert("You have been signed out!");
    navigate("/loginpage");
  };

  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light">
      <div className="container">
        {/* Logo */}
        <Link className="navbar-brand" to="/">
          <img src={logo} alt="Logo" width="150" height="30" />
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
  );
}
