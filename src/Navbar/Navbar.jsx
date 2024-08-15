import React from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

const Navbar = () => {
  return (
    <nav id="navmenu" className="navmenu">
      <ul>
        <li>
          <Link to="/" className="active">
            Overview
          </Link>
        </li>
        <li>
          <Link to="/repositories">Commercial Projects</Link>
        </li>
        <li>
          <Link to="/people">People</Link>
        </li>
        <li>
          <a href="#pricing">Account</a>
        </li>
      </ul>
    </nav>
  );
};

export default Navbar;
