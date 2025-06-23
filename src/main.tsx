import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import Gronsfeld from "./components/gronsfeld";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <Gronsfeld />
  </StrictMode>
);
