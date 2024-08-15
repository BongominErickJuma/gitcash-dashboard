import { StrictMode } from "react";
import { createRoot } from "react-dom/client";

// bootstrap
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min";
import "bootstrap-icons/font/bootstrap-icons.css";

// swiper js

// Import Swiper styles
import "swiper/css";
// Fonts

import "@fontsource/roboto";
import "@fontsource/poppins";
import "@fontsource/raleway";

import App from "./App.jsx";
import "./index.css";

// AOS
// Import AOS styles
import "aos/dist/aos.css";
import AOS from "aos";
AOS.init();

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <App />
  </StrictMode>
);
