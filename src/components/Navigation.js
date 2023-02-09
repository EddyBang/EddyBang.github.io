import React from "react";
//Permet de naviguer entre les pages (react-router-dom)
import { NavLink } from "react-router-dom";

const Navigation = () => {
  return (
    <div className="navigation">
      <ul>
        <NavLink to="/" className={(nav) => (nav.isActive ? "nav-active" : "")}>
          <li> Présentation </li>
        </NavLink>

        <NavLink
          to="/parcours"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          
          <li> Parcours </li>
        </NavLink>
        <NavLink
          to="/competences"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          
          <li> Compétences </li>
        </NavLink>
        <NavLink
          to="/projetsprofessionnels"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Projets Professionnels </li>
        </NavLink>
        <NavLink
          to="/projets"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Projets </li>
        </NavLink>
        <NavLink
          to="/contact"
          className={(nav) => (nav.isActive ? "nav-active" : "")}
        >
          <li> Contacts </li>
        </NavLink>
      </ul>
    </div>
  );
};

export default Navigation;
