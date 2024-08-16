import React from "react";

const Sidebar = () => {
  return (
    <div className="bg-light border-right" id="sidebar-wrapper">
      <div className="sidebar-heading">Files </div>
      <div className="list-group list-group-flush">
        <a
          href="#file1"
          className="list-group-item list-group-item-action bg-light"
        >
          File 1
        </a>
        <a
          href="#file2"
          className="list-group-item list-group-item-action bg-light"
        >
          File 2
        </a>
        <a
          href="#file3"
          className="list-group-item list-group-item-action bg-light"
        >
          File 3
        </a>
        <a
          href="#file4"
          className="list-group-item list-group-item-action bg-light"
        >
          File 4
        </a>
        <a
          href="#file5"
          className="list-group-item list-group-item-action bg-light"
        >
          File 5
        </a>
      </div>
    </div>
  );
};

export default Sidebar;
