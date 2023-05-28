import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Symfonyfront from "../components/Symfonyfront";

const Symfony = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Symfonyfront />
    </div>
  );
};

export default Symfony;
