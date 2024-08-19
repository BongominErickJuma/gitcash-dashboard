import React, { useState } from "react";

const Settings = () => {
  const [isOpen, setIsOpen] = useState({
    manage: false,
    build: false,
    secure: false,
    deploy: false,
    operate: false,
    monitor: false,
    analyse: false,
    settings: false,
  });

  const toggleOpen = (item) => {
    setIsOpen((prevState) => ({
      ...prevState,
      [item]: !prevState[item],
    }));
  };

  const chevronStyle = (isOpen) => ({
    transform: isOpen ? "rotate(90deg)" : "rotate(-90deg)",
    transition: "transform 0.3s ease-in-out",
  });

  return (
    <div className="card mt-3">
      <div className="card-body">
        <h5>Project</h5>
        <ul
          style={{
            listStyleType: "none",
            padding: 0,
            margin: 0,
          }}
        >
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-people me-2"></i>
              <a href="#" className="text-dark link-info">
                Manage
              </a>
            </div>
            {/* Add Chevron only if there are children */}
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.manage)}
              onClick={() => toggleOpen("manage")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-hammer me-2"></i>
              <a href="#" className="text-dark link-info">
                Build
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.build)}
              onClick={() => toggleOpen("build")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-shield-lock me-2"></i>
              <a href="#" className="text-dark link-info">
                Secure
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.secure)}
              onClick={() => toggleOpen("secure")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-cloud-upload me-2"></i>
              <a href="#" className="text-dark link-info">
                Deploy
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.deploy)}
              onClick={() => toggleOpen("deploy")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-server me-2"></i>
              <a href="#" className="text-dark link-info">
                Operate
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.operate)}
              onClick={() => toggleOpen("operate")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-eye me-2"></i>
              <a href="#" className="text-dark link-info">
                Monitor
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.monitor)}
              onClick={() => toggleOpen("monitor")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-graph-up-arrow me-2"></i>
              <a href="#" className="text-dark link-info">
                Analyse
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.analyse)}
              onClick={() => toggleOpen("analyse")}
            ></i>
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-gear me-2"></i>
              <a href="#" className="text-dark link-info">
                Settings
              </a>
            </div>
            <i
              className="bi bi-chevron-down"
              style={chevronStyle(isOpen.settings)}
              onClick={() => toggleOpen("settings")}
            ></i>
          </li>
          <li>
            <hr />
          </li>
          <li className="d-flex align-items-center justify-content-between">
            <div>
              <i className="bi bi-question-circle me-2"></i>
              <a href="#" className="text-dark link-info">
                Help
              </a>
            </div>
            {/* Help does not have children, no chevron needed */}
          </li>
        </ul>
      </div>
    </div>
  );
};

export default Settings;
