import React from "react";
import Logo from "../Assets/logo-white.png";
import "./Company.css";

const Company = () => {
  return (
    <div className="row p-0 company">
      <div className="logo-company col-lg-3">
        <img src={Logo} alt="company logo" className="d-block w-100" />
      </div>
      <div className="col-lg-9 d-flex flex-column justify-content-center">
        <div className="company-name d-flex align-items-center justify-content-between ">
          <div className="left">
            <h3>Cognosphere Dynamics Ltd</h3>
            <p>Strike balance</p>
          </div>
          <div className="right">
            <p className="d-flex justify-content-between">
              Balance <i className="bi bi-eye ms-3"></i>
            </p>
            <h3>UGX: 250,000</h3>
          </div>
        </div>
        <ul>
          <li>
            <a href="#">
              <i className="bi bi-people fs-6 me-2"></i>
              <span className="me-2">20</span>followers
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-geo-alt fs-6 me-2"></i>
              Uganda
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-link-45deg fs-6 me-2"></i>
              https://www.cognospheredynamics.co.ug
            </a>
          </li>
          <li>
            <a href="#">
              <i className="bi bi-envelope fs-6 me-2"></i>
              info@cognospheredynamics.com
            </a>
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Company;
