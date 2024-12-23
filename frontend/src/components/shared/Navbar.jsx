import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import '../css/Navbar.css';
import Virina from '../../assets/virina.avif'

const Navbar = () => {
  const location = useLocation();

  const navLinks = [
    { path: '/', label: 'Home' },
    { path: '/registration', label: 'Registration' },
    { path: '/resources', label: 'Resources' },
    { path: '/team', label: 'Team' },
    { path: '/gallery', label: 'Gallery' },
    { path: '/contact', label: 'Contact' }
  ];

  return (
    <nav className="navbar">
      <div className="nav-logo">
        <Link to="https://www.virinafoundation.com/">
          <img src={Virina} alt="Logo" className="logo"/>
        </Link>
      </div>
      <nav className="skew-menu">
        <ul>
          {navLinks.map((link) => (
            <li key={link.path}>
              <Link 
                to={link.path}
                className={location.pathname === link.path ? 'active' : ''}
              >
                {link.label}
              </Link>
            </li>
          ))}
        </ul>
      </nav>
    </nav>
  );
};

export default Navbar;