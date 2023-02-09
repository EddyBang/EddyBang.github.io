import React from 'react';
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Competencesfront from '../components/Competencesfront';
const Competences = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Competencesfront />
        </div>
    );
};

export default Competences;