import React from "react";
import { NavLink } from "react-router-dom";

const Sicilylinesfront = () => {
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
                Réservation de traversée "Sicilylines"
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-life-preserver"
                  viewBox="0 0 16 16"
                >
                  <path d="M8 16A8 8 0 1 0 8 0a8 8 0 0 0 0 16zm6.43-5.228a7.025 7.025 0 0 1-3.658 3.658l-1.115-2.788a4.015 4.015 0 0 0 1.985-1.985l2.788 1.115zM5.228 14.43a7.025 7.025 0 0 1-3.658-3.658l2.788-1.115a4.015 4.015 0 0 0 1.985 1.985L5.228 14.43zm9.202-9.202-2.788 1.115a4.015 4.015 0 0 0-1.985-1.985l1.115-2.788a7.025 7.025 0 0 1 3.658 3.658zm-8.087-.87a4.015 4.015 0 0 0-1.985 1.985L1.57 5.228A7.025 7.025 0 0 1 5.228 1.57l1.115 2.788zM8 11a3 3 0 1 1 0-6 3 3 0 0 1 0 6z" />
                </svg>
                2022
              </div>

              <div class="container">
                <div class="exppro">
                  <p>
                    Application créer pour mettre en pratique nos premières
                    connaissance de sur C#. Elle permet de modifier le nom du
                    secteur, de supprimer un secteur, de supprimer une liaison
                    de deux ports, de modifier la durée de deux ports et
                    d'ajouter une nouvelle liaison.
                  </p>
                  <p>
                    Source:
                    <a
                      href="https://github.com/BanggEddy/Sicilylines_Mission2"
                      style={{
                        transition: "1s",
                        color: "#6B8E23",
                        textDecoration: "none !important;",
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

              <p>Stack : C#</p>
            </div>
          </div>
        </div>
        <div class="saut"></div>
        <div class="container">
          <div class="saut"></div>
          <img
            src="./capp.png"
            alt="bonbon2front"
            style={{
              width: "700px",
              height: "400px",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
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
      </div>
    </div>
  );
};

export default Sicilylinesfront;
