import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './navbar.css'; // Import file CSS

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const offset = window.scrollY;
      setScrolled(offset > 50);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav className={`navbar navbar-expand-lg ${scrolled ? 'scrolled' : ''}`}>
      <div className="container custom-container">
        {/* Burger Menu */}
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

        {/* Menu Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            <li className="nav-item">
              <Link className="nav-link" to="/">
                JB Akun
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/TopUp">
                TopUp
              </Link>
            </li>
            <li className="nav-item">
              <Link className="nav-link" to="/Midman">
                Midman
              </Link>
            </li>
            {/* <li className="nav-item">
              <Link className="nav-link" to="/AmankanAkun">
                Amankan Akun
              </Link>
            </li> */}
          </ul>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
