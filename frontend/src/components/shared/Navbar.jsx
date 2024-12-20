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
      <div className="nav-logo">
        <img src="https://via.placeholder.com/100x50" alt="Logo" className="logo"/>
      </div>
      <nav class="skew-menu">
        <ul>
          <li><a href="#">Home</a></li>
          <li><a href="#">Registration</a></li>
          <li><a href="#">Resources</a></li>
          <li><a href="#">Team</a></li>
          <li><a href="#">Contact</a></li>
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;