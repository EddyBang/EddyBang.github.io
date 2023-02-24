import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Portfolioreactpage from "../components/Portfolioreactpage";

const Portfolioreact = () => {
  return (
    <div>

      <Logo />
      <Navigation />
    <Portfolioreactpage />      
      </div>

  );
};

export default Portfolioreact;
