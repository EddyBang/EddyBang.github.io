import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Sicilylinesfront from "../components/Sicilylinesfront";

const Sicilylinespage = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Sicilylinesfront />
    </div>
  );
};

export default Sicilylinespage;
