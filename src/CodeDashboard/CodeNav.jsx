import React from "react";
import { fileNames, icons, commitMessages, updateTimes, links } from "./Readme";
import profile from "../Assets/client-logo.gif";
import Settings from "./Settings";
import { Link } from "react-router-dom";

const CodeNav = () => {
  // Define the arrays

  return (
    <div>
      <div className="d-flex align-items-center">
        <div className="d-flex align-items-center justify-content-between w-100">
          <div className="d-flex align-items-center justify-content-between">
            <button className="btn ms-0">R</button>
            <h3 className="ms-2">react-mini-dashboards</h3>
            <i className="bi bi-lock ms-2"></i>
          </div>

          <div>
            <div className="flex-row-custom">
              <div className="card d-flex align-items-center flex-row p-2 me-2">
                <i className="bi bi-bell ms-2"></i>
                <i className="bi bi-chevron-down ms-2"></i>
              </div>
              <div className="card d-flex align-items-center flex-row p-2 me-2">
                <i className="bi bi-star me-2"></i>
                star
                <span className="ms-2">0</span>
              </div>
              <div className="card d-flex align-items-center flex-row p-2">
                <i className="bi bi-git me-2"></i>
                fork
                <span className="ms-2">0</span>
              </div>
            </div>
          </div>
        </div>
      </div>
      <div className="row">
        <div className="col-lg-9">
          <div>
            <div className="flex-row-custom mt-3">
              <div className="flex-row-custom align-items-center">
                <button className="btn ms-0">
                  <div className="flex-row-custom align-items-center">
                    <i className="bi bi-git me-2"></i>
                    <i style={{ fontStyle: "normal" }}>main</i>
                    <i className="bi bi-chevron-down ms-2"></i>
                  </div>
                </button>
                <h6 className="ms-2">react-mini-dashboards /</h6>
                <button className="btn ms-1">
                  <div>
                    <i className="bi bi-plus"></i>
                    <i className="bi bi-chevron-down"></i>
                  </div>
                </button>
              </div>
              <div>
                <div className="flex-row-custom">
                  <button className="btn">History</button>
                  <button className="btn">Find file</button>
                  <button className="btn">
                    <div>
                      Edit
                      <i className="bi bi-chevron-down ms-2"></i>
                    </div>
                  </button>
                  <button className="btn">
                    <div>
                      Code
                      <i className="bi bi-chevron-down ms-2"></i>
                    </div>
                  </button>
                </div>
              </div>
            </div>
          </div>

          <div className="card mt-3">
            <div className="card-body pt-1 pb-0">
              <div className="d-flex flex-row align-items-center justify-content-between">
                <div className="d-flex flex-row align-items-start justify-content-between">
                  <img
                    src={profile}
                    alt="profile"
                    style={{
                      width: "32px",
                    }}
                  />
                  <div className="ms-2">
                    <a href="#" className="text-dark link-info">
                      Update file index.html
                    </a>
                    <p>
                      <a href="#" className="text-dark link-info me-2">
                        John Doe
                      </a>
                      authored 17 minutes ago
                    </p>
                  </div>
                </div>
                <div className="card d-flex align-items-center flex-row p-2">
                  dh47482wkw2
                  <i className="bi bi-clipboard2 ms-2"></i>
                </div>
              </div>
            </div>
          </div>

          <div
            style={{
              maxHeight: "100dvh",
              overflowY: "auto",
            }}
            className="repo"
          >
            <table className="table border mt-3">
              <thead>
                <tr className="table-secondary">
                  <th scope="col">Name</th>
                  <th scope="col">Last commit</th>
                  <th scope="col">Last update</th>
                </tr>
              </thead>
              <tbody>
                {fileNames.map((fileName, index) => (
                  <tr key={index}>
                    <td>
                      <Link to="/code-editor" className="text-dark link-info">
                        <i className={icons[index] + " me-2"}></i>
                        {fileName}
                      </Link>
                    </td>
                    <td>
                      <Link to="/code-editor" className="text-dark link-info">
                        {commitMessages[index]}
                      </Link>
                    </td>
                    <td>{updateTimes[index]}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
        <div className=" col-lg-3 mt-3">
          <div className="card">
            <div className="card-body">
              <h6 className="card-title">no description yet</h6>
              <ul className="p-0 m-0">
                <li>
                  <a href="#" className="text-dark link-info">
                    <i className="bi bi-book me-2"></i>
                    Readme
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark link-info">
                    <i className="bi bi-activity me-2"></i>
                    Activity
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark link-info">
                    <i className="bi bi-star me-2"></i>0 Stars
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark link-info">
                    <i className="bi bi-eye me-2"></i>
                    10 Watchers
                  </a>
                </li>
                <li>
                  <a href="#" className="text-dark link-info">
                    <i className="bi bi-git me-2"></i>0 forks
                  </a>
                </li>
              </ul>
            </div>
          </div>
          <Settings />
        </div>
      </div>
    </div>
  );
};

export default CodeNav;
