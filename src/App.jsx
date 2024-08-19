import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Overview from "./Pages/Overview";
import Contributors from "./Pages/Contributors";
import AllRepositories from "./Pages/AllRepositories";
import NewRepositories from "./Repositories/NewRepositories";
import ImportRepository from "./Repositories/ImportRepository";
import UploadRepository from "./Repositories/UploadRepository";
import CodePreview from "./CodeDashboard/CodePreview";
import CodeEditor from "./CodeDashboard/CodeEditor";

const App = () => {
  return (
    <Router>
      <div className="index-page">
        <Header />
        <div className="container mx-auto"></div>
        <main className="main">
          <div className="container">
            <Routes>
              <Route path="/" element={<Overview />} />
              <Route path="/people" element={<Contributors />} />
              <Route path="/repositories" element={<AllRepositories />} />
              <Route path="/new_repository" element={<NewRepositories />} />
              <Route path="/import_repository" element={<ImportRepository />} />
              <Route path="/upload_repository" element={<UploadRepository />} />
              <Route path="/view_repo" element={<CodePreview />} />
              <Route path="/code-editor" element={<CodeEditor />} />

              <Route path="*" element={<h1>Page not found</h1>} />
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
