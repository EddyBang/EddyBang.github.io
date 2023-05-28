import React from 'react';
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Angularfront from '../components/Angularfront';
const Angular = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Angularfront />
        </div>
    );
};

export default Angular;