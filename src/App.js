import React from "react";
import ".//styles/index.css";
//Permet la gestion des routes (association composants//URL)
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import About from "./pages/About";
import Housing from "./pages/Housing";
import Error from "./pages/Error";
import Footer from "./components/Footer";

/*"Route" = Composant. Element principal de REACT ROUTER ; A chaque fois qu'on aura
un rendu visuel sur une URL, il faudra utiliser ce composant*/
//"Path" = Paramètre qui définit à quel chemin la route est associée

function App() {
  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/housing=:id" element={<Housing />} />
          <Route path="*" element={<Error />} />
        </Routes>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
