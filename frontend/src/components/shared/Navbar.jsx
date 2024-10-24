import React from 'react';
import { Menu, Search, User } from 'lucide-react';
import '../css/Navbar.css';
import { Link, useLocation, useNavigate } from 'react-router-dom';

const Navbar = () => {
  const navigate = useNavigate();
  // const location = useLocation();
  const isHomePage = location.pathname === '/';
  const callforsubmission = location.pathname === '/callforsubmission';
  const locationPage = location.pathname === '/location';
  const contact = location.pathname === '/contact';
  const exhibitors = location.pathname === '/exhibitors';
  const sponsors = location.pathname === '/sponsors';

  return (
    <nav className="navbar">
      {/* Left side: Logo or brand */}
      <div className="navbar-logo">
        <img 
          src="https://via.placeholder.com/100x50" 
          alt="Logo" 
          className="logo"
        />
      </div>

      {/* Right side: Navigation Links */}
      
      <div className="flex space-x-4">
                  <Link
                    to="/"
                    className={`${location.pathname ==='/'}`}
                  >
                    Home
                  </Link>
        </div>
        <div className="flex space-x-4">
                  <Link
                    to="/callforsubmission"
                    className={`${location.pathname ==='/callforsubmission'}`}
                  >
                    callforsubmission
                  </Link>
                  </div>
                  <div className="flex space-x-4">
                  <Link
                    to="/location"
                    className={`${location.pathname ==='/location'}`}
                  >
                    Location
                  </Link>
                  </div>
                  <div className="flex space-x-4">
                  <Link
                    to="/contact"
                    className={`${location.pathname ==='/contact'}`}
                  >
                    contact
                  </Link>
                  </div>
                  <div className="flex space-x-4">
                  <Link
                    to="/exhibitors"
                    className={`${location.pathname ==='/exhibitors'}`}
                  >
                    Exhibitors
                  </Link>
                  </div>
                  <div className="flex space-x-4">
                  <Link
                    to="/sponsors"
                    className={`${location.pathname ==='/sponsors'}`}
                  >
                    sponsors
                  </Link>
                  </div>
                  
      
    </nav>
  );
};

export default Navbar;