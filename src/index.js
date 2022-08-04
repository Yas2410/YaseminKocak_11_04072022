import React from "react";
import "./styles/index.css";
import App from "./App";

/*
LE CODE SUIVANT AFFICHE UN MESSAGE D'ERREUR DANS LA CONSOLE :
ReactDOM.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>,
  document.getElementById("root")
);

Warning: ReactDOM.render is no longer supported in React 18. 
Use createRoot instead
*/

//POUR Y REMEDIER :

import { createRoot } from "react-dom/client";

const container = document.getElementById("root");
const root = createRoot(container);

root.render(
  <React.StrictMode>
    <App />
  </React.StrictMode>
);
