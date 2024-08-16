import React, { useCallback } from "react";
import { useDropzone } from "react-dropzone";
import { Link } from "react-router-dom";

const UploadRepository = () => {
  const onDrop = useCallback((acceptedFiles) => {
    console.log(acceptedFiles); // Handle the files as needed
  }, []);

  const { getRootProps, getInputProps, isDragActive } = useDropzone({ onDrop });

  return (
    <div className="container mt-5">
      <div className="row justify-content-center">
        <div className="col-md-8">
          <h2 className="mb-4">Upload Repository from Local Machine</h2>
          <form>
            <div className="mb-3">
              <label className="form-label">Choose Repository Files</label>
              <div
                {...getRootProps()}
                className={`dropzone border p-4 ${
                  isDragActive ? "bg-light" : ""
                }`}
                style={{ cursor: "pointer" }}
              >
                <input {...getInputProps()} multiple />
                {isDragActive ? (
                  <p>Drop the files here...</p>
                ) : (
                  <p>Drag 'n' drop some files here, or click to select files</p>
                )}
              </div>
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
              Upload Repository
            </button>
            <button type="reset" className="btn">
              Cancel
            </button>
          </form>

          <div className="card my-4">
            <div className="card-body">
              <div className="flex-row-custom justify-content-start gap-2">
                <Link to="/import_repository">Import Existing Repository</Link>
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

export default UploadRepository;
