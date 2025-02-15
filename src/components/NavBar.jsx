import React, { useState } from "react";
import { Link } from "react-router";
import "/Users/miguelserrano/Projects/art-site-project/art-site/src/NavBar.css";

const NavBar = () => {
  const [isNavCollapsed, setIsNavCollapsed] = useState(true);

  const handleNavCollapse = () => setIsNavCollapsed(!isNavCollapsed);

  return (
    <>
      {/* Navbar */}
      <nav className="navbar navbar-expand-lg">
        <div className="container-fluid">
          {/* Brand/Logo */}
          <span className="navbar-text">
            <h1 
            className="heroName display-6 fw-bold">Molly Serrano</h1>
          </span>

          {/* Navbar Toggler for Mobile */}
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNav"
            aria-controls="navbarNav"
            aria-expanded={!isNavCollapsed ? true : false}
            aria-label="Toggle navigation"
            onClick={handleNavCollapse}
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          {/* Nav Links */}
          <div
            className={`collapse navbar-collapse ${!isNavCollapsed ? "show" : ""}`}
            id="navbarNav"
          >
            <div className="navbar-nav ms-auto">
              <Link to="/molly-serrano/" className="nav-link btn btn-primary mx-2 my-1">
                Home
              </Link>
              <Link to="/about" className="nav-link btn btn-primary mx-2 my-1">
                About
              </Link>
              <Link to="/album" className="nav-link btn btn-primary mx-2 my-1">
                Gallery
              </Link>
              <a
                href="https://www.amazon.com/hz/wishlist/ls/37TMRU9PIQPQZ/ref=nav_wishlist_lists_1"
                className="nav-link btn btn-primary mx-2 my-1"
                target="_blank"
                rel="noopener noreferrer"
              >
                Classroom Wishlist (Amazon)
              </a>
              {/* <a href="#education" className="nav-link btn btn-primary mx-2 my-1">
                Educational Resources
              </a> */}
            </div>
          </div>
        </div>
      </nav>
    </>
  );
};

export default NavBar;