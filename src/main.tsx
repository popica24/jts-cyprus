import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App";
import { ParallaxProvider } from "react-scroll-parallax";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <ParallaxProvider isDisabled={window.innerWidth < 640}>
      <App />
    </ParallaxProvider>
  </StrictMode>
);
