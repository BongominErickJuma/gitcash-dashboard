import React from "react";
import repoDetails from "./repoDetails";
import "./Repositories.css";
import { Link } from "react-router-dom";

const PopularRepositories = () => {
  return (
    <div className="repositories mt-5">
      <div className="flex-row-custom">
        <h3>Popular Project Repositoies</h3>
        <Link to="/new_repository" className="btn">
          Add Project Repository
        </Link>
      </div>

      <div className="row">
        {repoDetails.slice(0, 4).map((repo, inx) => (
          <Link to="/view_repo" className="col-lg-6 col-md-6" key={inx}>
            <div className="card my-3">
              <div className="card-body">
                <div className="flex-row-custom">
                  <h3>{repo.name}</h3>
                  <div className="flex-row-custom">
                    <ul className="d-flex">
                      {repo.people.map((personImage, idx) => (
                        <li key={idx}>
                          <img
                            src={personImage}
                            alt="contributor"
                            className="rounded-circle"
                          />
                        </li>
                      ))}
                    </ul>
                    <button className="btn">{repo.privacy}</button>
                  </div>
                </div>
                <p>{repo.description}</p>
                <div className="flex-row-custom">
                  <h5 className="fw-light">{repo.languages}</h5>
                  <h3>{repo.amountRemaining}</h3>
                </div>
              </div>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default PopularRepositories;
