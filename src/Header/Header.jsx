import React from "react";
import Logo from "../Assets/logo-white.png";
import clientLogo from "../Assets/client-logo.gif";
import "./Header.css";
import Navbar from "../Navbar/Navbar";

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
            <a href="#" className="twitter">
              <i className="bi bi-twitter-x"></i>
            </a>
            <a href="#" className="facebook">
              <i className="bi bi-facebook"></i>
            </a>
            <a href="#" className="instagram">
              <i className="bi bi-instagram"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-linkedin"></i>
            </a>
            <a href="#" className="linkedin">
              <i className="bi bi-three-dots-vertical"></i>
            </a>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
