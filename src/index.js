import React from "react";
import "./styles/index.css";
import App from "./App";
//import ReactDOM from "react-dom";
/*
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);
*/

/*Pour corriger erreur dans la console : 
Warning: ReactDOM.render is no longer supported in React 18. 
Use createRoot instead*/
import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
