import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { ContexProvider, ThemeProvider } from "./contex/Provider.jsx";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
createRoot(document.getElementById("root")).render(
  <StrictMode>
    <ThemeProvider>
      <ContexProvider>
        <App />
        <ToastContainer />
      </ContexProvider>
    </ThemeProvider>
  </StrictMode>
);
