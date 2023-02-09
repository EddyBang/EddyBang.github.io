import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Haribofront from "../components/Haribofront";

const Haribo = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Haribofront />
    </div>
  );
};

export default Haribo;
