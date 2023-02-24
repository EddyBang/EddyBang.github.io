import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Japashopfront from "../components/Japashopfront";

const JapaShop = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Japashopfront />
    </div>
  );
};

export default JapaShop;
