import React from "react";

const CodeNav = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-light border-bottom">
      <a className="navbar-brand" href="#">
        Dashboard
      </a>
      <button
        className="navbar-toggler"
        type="button"
        data-toggle="collapse"
        data-target="#navbarNavDropdown"
        aria-controls="navbarNavDropdown"
        aria-expanded="false"
        aria-label="Toggle navigation"
      >
        <span className="navbar-toggler-icon"></span>
      </button>
      <div className="collapse navbar-collapse" id="navbarNavDropdown">
        <ul className="navbar-nav ml-auto">
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown 1
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown"
            >
              <a className="dropdown-item" href="#action1">
                Action 1
              </a>
              <a className="dropdown-item" href="#action2">
                Action 2
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#another-action">
                Another Action
              </a>
            </div>
          </li>
          <li className="nav-item dropdown">
            <a
              className="nav-link dropdown-toggle"
              href="#"
              id="navbarDropdown2"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded="false"
            >
              Dropdown 2
            </a>
            <div
              className="dropdown-menu dropdown-menu-right"
              aria-labelledby="navbarDropdown2"
            >
              <a className="dropdown-item" href="#action3">
                Action 3
              </a>
              <a className="dropdown-item" href="#action4">
                Action 4
              </a>
              <div className="dropdown-divider"></div>
              <a className="dropdown-item" href="#another-action-2">
                Another Action
              </a>
            </div>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default CodeNav;
