import React from "react";
import { NavLink } from "react-router-dom";

const Parcourspage = () => {
  return (
    <div>
      <div className="affich2">
        <div className="container">
          <div className="moi">
            <d>
              <b style={{ fontSize: "20px" }}>Mes Formations</b>
            </d>
          </div>

          <br></br>
          {/*Card pour le BTS SIO*/}

          <div class="card">
            <br></br>
            <div class="card-content">
              <div className="row">
                <div className="col">
                  <br></br>
                  <img
                    src="./sio.png"
                    alt="sio"
                    style={{ width: "70%", borderRadius: "5%" }}
                  ></img>

                  <br></br>
                </div>
                <div className="col">
                  {" "}
                  <br></br>
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    BTS SIO (Services Informatiques au Organisations) SLAM
                    (Développement web et le Développement d’Applications
                    Mobiles) | 2021-2023
                  </p>
                  <div className="gauche" style={{ fontSize: "10px" }}>
                    Stack : HTML / CSS / JAVA / PHP / SYMFONY / LINUX / C# / SQL
                    / PHPMYADMIN / PYTHON
                  </div>
                  <br></br>
                  <a
                    href="https://www.lyceedecachan.fr/"
                    style={{ textDecoration: "none", color: "#00BFFF" }}
                  >
                    <button style={{ width: "auto", fontSize: "12px" }}>
                      Lycée de Cachan
                    </button>
                  </a>
                </div>
                {/*Card pour le Bac*/}

                <div className="col">
                  <br></br>

                  <img
                    src="./photo.png"
                    alt="bac"
                    style={{ width: "65%", borderRadius: "5%" }}
                  ></img>
                </div>

                <div className="col">
                  <p
                    style={{
                      fontWeight: "bold",
                      fontSize: "12px",
                      textAlign: "left",
                    }}
                  >
                    <br></br>
                    Baccalauréat général (Spécialités Math et SES) | 2020-2021
                  </p>
                  <div className="gauche" style={{ fontSize: "10px" }}>
                    SES : Science économique / Sociologie et science politique
                    <br></br>
                    Mathématique : Algèbre / Analyse / Géométrie / Probabilités
                    et statistiques / Algorithmique et programmation
                  </div>
                  <br></br>
                  <a
                    href="https://www.lycee-romainrolland-ivry.fr/"
                    style={{ textDecoration: "none", color: "#00BFFF" }}
                  >
                    <button style={{ width: "auto", fontSize: "12px" }}>
                      Lycée Romain Rolland
                    </button>
                  </a>
                </div>
              </div>
              <br></br>
            </div>
          </div>
          <br></br>

          {/*Card pour title Mes expériences professionnelles*/}

          <div class="container">
            <div class="moi">
              <d>
                <b style={{ fontSize: "20px" }}>
                  {" "}
                  Mes expériences professionnelles
                </b>
              </d>
            </div>
            <br></br>

            {/*Card pour première année*/}
            <div class="card">
              <div class="card-content">
                <div class="row">
                  <div class="col">
                    <br></br> <br></br>
                    <br></br>
                    <img
                      src="./laveline.png"
                      alt="laveline"
                      style={{ width: "75%", borderRadius: "10%" }}
                    ></img>
                  </div>
                  <div className="col">
                    <p
                      style={{
                        fontSize: "15px",
                        height: "50px",
                        fontWeight: "bold",
                      }}
                    >
                      <br></br>
                      Stage de première année
                    </p>
                    <p>30 mai - 1 juillet 2022</p>
                    <div class="exppro" style={{ fontSize: "11px" }}>
                      <p>
                        Réalisation d’un site web de musculation avec
                        l’architecture MVC. Création d’un CRUD en lien avec la
                        base de données sur PhpMyAdmin.
                      </p>
                      <p>Site réalisée avec : CSS / PHP / MySQL / JS</p>
                      <p>
                        Cette expérience a été très enrichissante et m'a apporté
                        un très bon premier contact avec le monde professionnel
                        de l'informatique.
                      </p>
                    </div>
                    <NavLink
                      to="/fiteddypage"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                      style={{ textDecoration: "none", color: "#00BFFF" }}
                    >
                      <button style={{ width: "auto", fontSize: "12px" }}>
                        Consulter le projet
                      </button>
                    </NavLink>
                  </div>

                  {/* Cards pour deuxième année*/}
                  <div class="col">
                    <br></br>
                    <br></br>

                    <img
                      src="./huayi.png"
                      alt="huayi"
                      style={{ width: "90%", borderRadius: "10%" }}
                    ></img>
                  </div>
                  <div className="col">
                    <p
                      style={{
                        fontSize: "15px",
                        height: "50px",
                        fontWeight: "bold",
                      }}
                    >
                      <br></br>
                      Stage de deuxième année
                    </p>
                    <p>30 mai - 1 juillet 2022</p>
                    <div class="exppro" style={{ fontSize: "11px" }}>
                      <p>
                        Réalisation d’un site web de vêtement en ReactJS en
                        front-end et NodeJS en back-end. Création d’un CRUD en
                        lien avec la BDD de MongoDB.
                      </p>
                      <p>Site réalisé avec : NodeJS, ReactJS, MongoDB</p>
                      <p>
                        Ce stage m'a permis de découvrir de nouveau langague
                        pour pouvoir élargir mes connaissances sur Javascript
                        avec ses frameworks et de la BDD MongoDB
                      </p>
                    </div>
                    <NavLink
                      to="/japashop"
                      className={(nav) => (nav.isActive ? "nav-active" : "")}
                      style={{ textDecoration: "none", color: "#00BFFF" }}
                    >
                      <button style={{ width: "auto", fontSize: "12px" }}>
                        Consulter le projet
                      </button>
                    </NavLink>
                  </div>
                </div>
                <br></br>
              </div>
            </div>
          </div>
          <div className="saut"></div>
          <div className="centrer">
            <p
              style={{
                fontWeight: "bold",
                fontSize: "12px",
                height: "70px",
              }}
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width=""
                height="16"
                fill="currentColor"
                class="bi bi-c-circle"
                viewBox="0 0 16 16"
              >
                <path d="M1 8a7 7 0 1 0 14 0A7 7 0 0 0 1 8Zm15 0A8 8 0 1 1 0 8a8 8 0 0 1 16 0ZM8.146 4.992c-1.212 0-1.927.92-1.927 2.502v1.06c0 1.571.703 2.462 1.927 2.462.979 0 1.641-.586 1.729-1.418h1.295v.093c-.1 1.448-1.354 2.467-3.03 2.467-2.091 0-3.269-1.336-3.269-3.603V7.482c0-2.261 1.201-3.638 3.27-3.638 1.681 0 2.935 1.054 3.029 2.572v.088H9.875c-.088-.879-.768-1.512-1.729-1.512Z" />
              </svg>
              2023 David LI. All right Reserved
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Parcourspage;
