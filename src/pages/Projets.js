import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import Projetspage from "../components/Projetspage";

const Projets = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Projetspage />
    </div>
  );
};

export default Projets;
