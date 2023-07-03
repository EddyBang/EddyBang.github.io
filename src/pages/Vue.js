import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Vuepage from "../components/Vuepage";

const Vue = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Vuepage />
    </div>
  );
};

export default Vue;
