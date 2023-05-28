import React from 'react';
import Logo from "../components/Logo";
//Appel la Navigation pour faire fonctionner la navigation
import Navigation from "../components/Navigation";
import "bootstrap/dist/css/bootstrap.css";
import Androidfront from '../components/Androidfront';
const Android = () => {
    return (
        <div>
            <Logo />
            <Navigation />
            <Androidfront />
        </div>
    );
};

export default Android;