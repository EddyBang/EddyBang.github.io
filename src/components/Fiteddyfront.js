import React from "react";
import { NavLink } from "react-router-dom";

const Fiteddyfront = () => {
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
                FitEddy
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-lightning"
                  viewBox="0 0 16 16"
                >
                  <path d="M5.52.359A.5.5 0 0 1 6 0h4a.5.5 0 0 1 .474.658L8.694 6H12.5a.5.5 0 0 1 .395.807l-7 9a.5.5 0 0 1-.873-.454L6.823 9.5H3.5a.5.5 0 0 1-.48-.641l2.5-8.5zM6.374 1 4.168 8.5H7.5a.5.5 0 0 1 .478.647L6.78 13.04 11.478 7H8a.5.5 0 0 1-.474-.658L9.306 1H6.374z" />
                </svg>
                2022
              </div>

              <div class="container">
                <div class="exppro">
                  <p>
                    Site crée lors de mon stage de première année avec
                    l’architecture MVC (Model, Vues,Controllers). Il permet pour
                    les utilisateurs de consulter les activités sportives sur le
                    site en se renseignant sur les détails de chaque
                    entrainement. Les administrateurs peuvent ajouter modifier
                    et supprimer les entrainements qu'ils veulent.
                  </p>
                  <p>
                    Source:
                    <a
                      href="https://github.com/BanggEddy/FitEddy"
                      style={{
                        transition: "1s",
                        color: "#6B8E23",
                        textDecoration: " none !important",
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
        <div class="container" style={{ height: "1350px" }}>
          <img
            src="./mvc.png"
            alt="bonbonfront"
            style={{
              width: "500px",
              height: "400px",
              borderRadius: "5%",
              boxShadow: "10px 10px 10px #aaaaaa",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./mvc2.png"
            alt="bonbon2front"
            style={{
              width: "200px",
              height: "400px",
              borderRadius: "5%",
              boxShadow: "10px 10px 10px #aaaaaa",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./mvc3.png"
            alt="bonbonfront3"
            style={{
              width: "600px",
              height: "400px",
              borderRadius: "5%",
              boxShadow: "10px 10px 10px #aaaaaa",
            }}
          ></img>
          <div className="saut"></div>

          <p style={{ fontWeight: "bold", fontSize: "12px" }}>
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
      </div>
    </div>
  );
};

export default Fiteddyfront;
