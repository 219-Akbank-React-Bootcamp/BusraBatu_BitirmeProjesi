import React from "react";
import ReactDOM from "react-dom/client";
import App from "./App";
import { LoginProvider } from "./contexts/LoginContext";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
    //uygulamayi provider ile sarmalamazsak usecontext calismaz
  <LoginProvider>
   <App />
  </LoginProvider>
);
