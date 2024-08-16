import React, { useState } from "react";
import { createPopper } from "@popperjs/core";

const CodePreview = () => {
  const files = [
    "index.html",
    "favicon.ico",
    "robots.txt",
    "manifest.json",
    "logo192.png",
  ];

  // Function to shuffle the files array and select 3 random files
  const getRandomFiles = () => {
    const shuffled = files.sort(() => 0.5 - Math.random());
    return shuffled.slice(0, 3);
  };

  // Get the 3 random files initially
  const [randomFiles, setRandomFiles] = useState(getRandomFiles());

  return (
    <div>
      <h5 className="mb-2">portfolio-website</h5>

      <div className="card rounded-0">
        <div className="px-2 row flex-row-custom align-items-center">
          <div className="flex-row-custom justify-content-start col-lg-5">
            <i className="bi bi-folder me-2"></i>
            <a
              href="#"
              className="text-dark link-info dropdown-toggle"
              id="dropdownMenuButton"
              data-bs-toggle="dropdown"
              aria-expanded="false"
            >
              public
            </a>
            <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton">
              {randomFiles.map((file, index) => (
                <li key={index}>
                  <a className="dropdown-item" href="#">
                    {file}
                  </a>
                </li>
              ))}
            </ul>
          </div>
          <a href="#" className="col-lg-4 text-dark link-info">
            commit message here
          </a>
          <p className="col-lg-3 align-self-center">4 days ago</p>
        </div>
      </div>

      <div className="card rounded-0">
        <div className="px-2 row flex-row-custom align-items-center">
          <div className="flex-row-custom justify-content-start col-lg-5">
            <i className="bi bi-folder me-2"></i>
            <a href="#" className="text-dark link-info">
              src
            </a>
          </div>
          <a href="#" className="col-lg-4 text-dark link-info">
            commit message here
          </a>
          <p className="col-lg-3">4 days ago</p>
        </div>
      </div>

      <div className="card rounded-0">
        <div className="px-2 row flex-row-custom align-items-center">
          <div className="flex-row-custom justify-content-start col-lg-5">
            <i className="bi bi-file-earmark me-2"></i>
            <a href="#" className="text-dark link-info">
              .gitignore
            </a>
          </div>
          <a href="#" className="col-lg-4 text-dark link-info">
            commit message here
          </a>
          <p className="col-lg-3">4 days ago</p>
        </div>
      </div>

      <div className="card rounded-0">
        <div className="px-2 row flex-row-custom align-items-center">
          <div className="flex-row-custom justify-content-start col-lg-5">
            <i className="bi bi-file-earmark me-2"></i>
            <a href="#" className="text-dark link-info">
              package-lock.json
            </a>
          </div>
          <a href="#" className="col-lg-4 text-dark link-info">
            commit message here
          </a>
          <p className="col-lg-3">4 days ago</p>
        </div>
      </div>

      <div className="card rounded-0">
        <div className="px-2 row flex-row-custom align-items-center">
          <div className="flex-row-custom justify-content-start col-lg-5">
            <i className="bi bi-file-earmark me-2"></i>
            <a href="#" className="text-dark link-info">
              package.json
            </a>
          </div>
          <a href="#" className="col-lg-4 text-dark link-info">
            commit message here
          </a>
          <p className="col-lg-3">4 days ago</p>
        </div>
      </div>
    </div>
  );
};

export default CodePreview;
