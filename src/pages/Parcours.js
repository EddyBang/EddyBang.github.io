import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Parcourspage from "../components/Parcourspage";

const Parcours = () => {
  return (
    <div>

      <Logo />
      <Navigation />
      <Parcourspage />
      
      </div>

  );
};

export default Parcours;
