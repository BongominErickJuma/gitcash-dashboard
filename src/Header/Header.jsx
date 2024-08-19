import React from "react";
import Logo from "../Assets/logo-white.png";
import clientLogo from "../Assets/client-logo.gif";
import "./Header.css";
import Navbar from "../Navbar/Navbar";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <header id="header" className="header d-flex align-items-center sticky-top">
      <div className="container position-relative d-flex align-items-start justify-content-between border-bottom pb-2">
        <div>
          <a
            href="index.html"
            className="logo d-flex align-items-center me-auto me-xl-0"
          >
            <img src={Logo} alt="Gitcash Logo Image" />
            <h1 className="sitename">GitCash.</h1>
          </a>
          <Navbar />
        </div>

        <div className="header-social-links d-flex align-items-end flex-column">
          <div className="logo d-flex align-items-center me-auto me-xl-0">
            <img src={clientLogo} alt="Gitcash Logo Image" />
            <h1 className="sitename">Cognosphere Dynamics</h1>
          </div>
          <div className="mt-2 justify-self-end">
            <ul className="d-flex align-items-end ">
              <li className="me-3">
                <Link to="new_repository" className="new p-0 m-0 ">
                  <i className="bi bi-plus fs-6"></i> New
                </Link>
              </li>
              <li className="me-3">
                <a href="#" className="linkedin p-0 m-0 ">
                  <i className="bi bi-envelope fs-6"></i>
                </a>
              </li>
              <li>
                <a
                  href="#"
                  className="account p-0 m-0"
                  data-bs-toggle="dropdown"
                >
                  <i className="bi bi-three-dots-vertical"></i>
                </a>
                <ul class="dropdown-menu">
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Another action
                    </a>
                  </li>
                  <li>
                    <a class="dropdown-item py-0" href="#">
                      Something else here
                    </a>
                  </li>
                </ul>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
