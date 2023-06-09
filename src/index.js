import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import Weather from "./Weather.js";

import "./Styles.css";

const rootElement = document.getElementById("root");
const root = createRoot(rootElement);

root.render(
  <StrictMode>
    <div className="App">
      <Weather defaultCity="Abuja" />
    </div>
  </StrictMode>
);
