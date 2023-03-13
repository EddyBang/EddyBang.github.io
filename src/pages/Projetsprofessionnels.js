import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Projetpropage from "../components/Projetpropage";

const Projetsprofessionnels = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Projetpropage />
    </div>
  );
};

export default Projetsprofessionnels;
