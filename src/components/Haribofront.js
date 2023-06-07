import React from "react";
import { NavLink } from "react-router-dom";

const Haribofront = () => {
  return (
    <div>
      <div class="centrer">
        <div className="container">
          <div class="card" style={{ opacity: "1" }}>
            <div class="card-content">
              <div
                class="affich"
                style={{ fontSize: "15px", height: "40px", fontWeight: "bold" }}
              >
                <NavLink
                  to="/projets"
                  style={{
                    color: "#0066b2",
                    textDecoration: "none !important",
                  }}
                >
                  Projets
                </NavLink>
                CandyShop "Haribo"
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-egg-fried"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z" />
                </svg>
                2022
              </div>

              <div class="container">
                <div class="exppro">
                  <p>
                    Site crée pour mettre en pratique nos premières
                    connaissances de première année. Nous avons ici utilisé
                    principalement du PHP pour créer des fonctionnalités telles
                    qu'ajouter, modifier ou supprimer des bonbons de la base de
                    données. Nous pouvons aussi mettre des produits dans un
                    panier où le prix total de tous les produits est calculé.
                  </p>
                  <p>
                    Source:
                    <a
                      href="https://github.com/BanggEddy/Haribo"
                      style={{
                        transition: "1s",
                        color: "#6B8E23",
                        textDecoration: "none !important",
                      }}
                      rel="noreferrer noopener"
                      target="_blank"
                    >
                      GitHub
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="16"
                        height="16"
                        fill="currentColor"
                        class="bi bi-box-arrow-up-right"
                        viewBox="0 0 16 16"
                      >
                        <path
                          fill-rule="evenodd"
                          d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"
                        />
                        <path
                          fill-rule="evenodd"
                          d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"
                        />
                      </svg>
                    </a>
                  </p>
                </div>
              </div>

              <p>Stack : HTML / CSS / PHP</p>
            </div>
          </div>
        </div>
        <div class="saut"></div>
        <div class="container">
          <img
            src="./bonbon.jpg"
            alt="bonbonfront"
            style={{
              width: "80%",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./bonbon2.jpg"
            alt="bonbon2front"
            style={{
              width: "80%",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./bonbon3.jpg"
            alt="bonbonfront3"
            style={{
              width: "80%",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
        </div>
      </div>
      <div className="saut"></div>

      <p
        style={{
          fontWeight: "bold",
          fontSize: "12px",
          textAlign: "center",
        }}
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          width="50"
          height="16"
          fill="currentColor"
          class="bi bi-c-circle"
          viewBox="0 0 16 16"
        >
          <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
        </svg>
        2023 David LI. All right Reserved
      </p>
      <div className="saut"></div>
    </div>
  );
};

export default Haribofront;
