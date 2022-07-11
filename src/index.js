import React from "react";
import ReactDOM from "react-dom";
import ".//styles/index.css";
//Permet la gestion des routes (association composants//URL)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";

/*"Route" = Composant. Element principal de REACT ROUTER ; A chaque fois qu'on aura
un rendu visuel sur une URL, il faudra utiliser ce composant*/
//"Path" = Paramètre qui définit à quel chemin la route est associée
ReactDOM.render(
  <React.StrictMode>
    <Router>
      <Header />
      <Routes>
        <Route exact path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </Router>
  </React.StrictMode>,
  document.getElementById("root")
);
