import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Harrypotterpage from "../components/Harrypotterpage";

const Harrypotter = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Harrypotterpage />
    </div>
  );
};

export default Harrypotter;
