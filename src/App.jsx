import React from "react";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./Header/Header";
import Overview from "./Pages/Overview";
import Contributors from "./Pages/Contributors";
import AllRepositories from "./Pages/AllRepositories";

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
            </Routes>
          </div>
        </main>
      </div>
    </Router>
  );
};

export default App;
