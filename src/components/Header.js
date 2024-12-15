import React from 'react'
import { Link, useNavigate} from 'react-router-dom';
import logo from '../assests/logo1.jpg';

export default function Header() {
    const navigate = useNavigate();

    const handleSignUp = () => {
      navigate('/loginpage');
    };

  return (
    <>
    <nav class="navbar navbar-expand-lg navbar-light bg-light">
    <div class="container">
       
        <Link class="navbar-brand" to="/">
            <img src={logo} alt="Logo" width="150" height="30" class="d-inline-block align-text-top"/>
           
        </Link>
        
       
        <button class="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
            <span class="navbar-toggler-icon"></span>
        </button>
        
       
        <div class="collapse navbar-collapse" id="navbarNav">
            <ul class="navbar-nav me-auto mb-2 mb-lg-0">

                <li class="nav-item">
                    <Link class="nav-link active" to="/">Home</Link>
                </li>

                <li class="nav-item">
                    <a class="nav-link" href="#Aboutsection">About</a>
                </li>
                
                <li class="nav-item">
                    <a class="nav-link" href="#contactsection">Contact</a>
                </li>
                
            </ul>
            
           
            {/* Sign-Up Button */}
          <div className="dropdown">
            <button
              className="btn btn-primary px-4"
              type="button"
              id="loginDropdown"
              onClick={handleSignUp}
            >
              Sign Up
            </button>
          </div>

        </div>
    </div>
</nav>
    </>
  );
}

