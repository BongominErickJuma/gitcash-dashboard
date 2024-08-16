import React from "react";
import { Link } from "react-router-dom";

const NewRepositories = () => {
  return (
    <div className="container my-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Start a New Repository</h2>

          <div className="card mb-4">
            <div className="card-body">
              <h4 className="card-title">Import or Upload a Repository</h4>
              <p className="card-text">
                Already have a project repository elsewhere?
              </p>
              <div className="flex-row-custom justify-content-start gap-2">
                <Link to="/import_repository">Import Existing Repository</Link>
                <b>Or</b>
                <Link to="/upload_repository">Upload from Local Machine</Link>
              </div>
            </div>
          </div>

          <div className="card">
            <div className="card-body">
              <h3 className="card-title">Create a New Repository</h3>
              <form className="mt-4">
                <div className="mb-3">
                  <label htmlFor="repoName">Repository Name</label>
                  <input
                    type="text"
                    id="repoName"
                    placeholder="Enter repository name"
                  />
                </div>

                <div className="mb-3">
                  <label htmlFor="repoDescription" className="form-label">
                    Description
                  </label>
                  <textarea
                    className="form-control"
                    id="repoDescription"
                    rows="3"
                    placeholder="Enter a description for the repository"
                  ></textarea>
                </div>

                <div className="mb-3">
                  <label htmlFor="repoPrice">Contributor Payment</label>
                  <div>
                    <span>$</span>
                    <input
                      type="number"
                      id="repoPrice"
                      placeholder="Set the price offered for contributions"
                      min="0"
                    />
                  </div>
                </div>

                <div className="mb-3">
                  <label htmlFor="repoSkills">Required Skills</label>
                  <input
                    type="text"
                    id="repoSkills"
                    placeholder="Enter the skills required for contributors"
                  />
                  <small className="form-text text-muted">
                    Separate skills with commas (e.g., React, Node.js,
                    PostgreSQL)
                  </small>
                </div>

                <div className="d-flex justify-content-end">
                  <button type="submit" className="btn me-2">
                    Create Repository
                  </button>
                  <button type="reset" className="btn">
                    Cancel
                  </button>
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default NewRepositories;
