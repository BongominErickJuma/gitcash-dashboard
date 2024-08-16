import React from "react";
import { Link } from "react-router-dom";

const ImportRepository = () => {
  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-6">
          <h2 className="mb-4">Import Existing Repository</h2>
          <form>
            <div className="mb-3">
              <label htmlFor="repoURL">Repository URL</label>
              <input type="text" id="repoURL" />
            </div>
            <div className="mb-3">
              <label htmlFor="username">
                Your username for your source repository
              </label>
              <input type="email" id="username" />
            </div>
            <div className="mb-3">
              <label htmlFor="password">
                password for your source repository
              </label>
              <input type="password" id="password" />
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
                <input type="number" id="repoPrice" min="0" />
              </div>
            </div>

            <div className="mb-3">
              <label htmlFor="repoSkills">Required Skills</label>
              <input type="text" id="repoSkills" />
              <small className="form-text text-muted">
                Separate skills with commas (e.g., React, Node.js, PostgreSQL)
              </small>
            </div>

            <button type="submit" className="btn ms-0">
              Import
            </button>
            <button type="reset" className="btn ">
              Cancel
            </button>
          </form>
          <div className="card my-4">
            <div className="card-body">
              <div className="flex-row-custom justify-content-start gap-2">
                <Link to="/upload_repository">Upload From local machine</Link>
                <b>Or</b>
                <Link to="/new_repository">Create a new Repository</Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ImportRepository;
