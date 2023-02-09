import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Fiteddypage from "./pages/Fiteddypage";
import Haribo from "./pages/Haribo";
import Harrypotter from "./pages/Harrypotter";
import Parcours from "./pages/Parcours";
import Projets from "./pages/Projets";
import Projetsprofessionnels from "./pages/Projetsprofessionnels";
import Présentation from "./pages/Présentation";
import Sicilylinespage from "./pages/Sicilylinespage";
import Competences from "./pages/Competences";

/*Si jamais ton chemin c'est path = rien, il va nous amener dans Home.js*/
/*Si jamais ton chemin c'est path = /about, il va nous amener dans About.js*/

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Présentation />} />
          <Route path="/parcours" element={<Parcours />} />
          <Route
            path="/projetsprofessionnels"
            element={<Projetsprofessionnels />}
          />
          <Route path="/projets" element={<Projets />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/harrypotter" element={<Harrypotter />} />
          <Route path="/haribo" element={<Haribo />} />
          <Route path="/fiteddypage" element={<Fiteddypage />} />
          <Route path="/sicilylinespage" element={<Sicilylinespage />} />
          <Route path="/competences" element={<Competences />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
};

export default App;
