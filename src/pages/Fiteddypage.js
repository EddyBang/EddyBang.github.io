import React from "react";
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Fiteddyfront from "../components/Fiteddyfront";

const Fiteddypage = () => {
  return (
    <div>
      <Logo />
      <Navigation />
      <Fiteddyfront />
    </div>
  );
};

export default Fiteddypage;
