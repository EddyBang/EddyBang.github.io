import React, { useEffect, useRef } from "react";

import { NavLink } from "react-router-dom";

const Projetspage = () => {
  return (
    <div>
      <div class="affich">
        <div class="container">
          <div class="moi" style={{ height: "80px", fontSize: "20px" }}>
            <div className="centrer">
              <d>
                <b>Projets</b>
              </d>
            </div>
          </div>
          <div className="centrer">
            <div class="row" style={{ height: "380px" }}>
              <div className="col">
                <NavLink to="/harrypotter">
                  <img
                    src="./harrypotter.jpg"
                    alt="harrypotter"
                    style={{
                      width: "45%",
                      borderRadius: "5%",
                      border: "solid rgb(39, 158, 167) ",
                      boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                    }}
                    title="Harry Potter 2022"
                    className="image"
                  ></img>
                </NavLink>

                <div class="saut0"></div>
                <p
                  style={{
                    fontSize: "24px",
                    height: "30px",
                    fontWeight: "bold",
                  }}
                >
                  Harry Potter
                </p>

                <div class="exppro">
                  <p>
                    Création d'un site en HTML et CSS avec le thème d'Harry
                    Potter.
                  </p>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <NavLink to="/haribo">
                    <img
                      src="./bonbon.jpg"
                      alt="haribo"
                      style={{
                        width: "45%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="Haribo 2022"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Haribo
                  </p>
                  <div class="exppro">
                    <p>
                      Site marchand de bonbon pour mettre en pratique nos
                      connaissances en PHP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div className="col">
                <NavLink to="/fiteddypage">
                  <img
                    src="./mvc.png"
                    alt="fiteddy"
                    style={{
                      width: "50%",
                      borderRadius: "5%",
                      border: "solid rgb(39, 158, 167) ",
                      boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                    }}
                    title="FitEddy 2022"
                  ></img>
                </NavLink>
                <div class="saut0"></div>
                <p
                  style={{
                    fontSize: "24px",
                    height: "30px",
                    fontWeight: "bold",
                  }}
                >
                  FitEddy
                </p>

                <div class="exppro">
                  <p>
                    Site web de musculation pour mettre en pratique nos
                    connaissances en PHP pour faire un MVC
                  </p>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <NavLink to="/sicilylinespage">
                    <img
                      src="./frontapp.png"
                      alt="Sicilylines"
                      style={{
                        width: "80%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="SicilylinesC# 2023"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Sicilylines
                  </p>

                  <div class="exppro">
                    <p>
                      Application pour faire des réservations de traversée créer
                      sur C#.
                    </p>
                  </div>
                </div>
              </div>
            </div>
            <div className="row">
              <div className="col">
                <div class="centrer">
                  <NavLink to="/japashop">
                    <img
                      src="./japashop.png"
                      alt="Japashop"
                      style={{
                        width: "80%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="JapaShop 2023"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Japashop
                  </p>

                  <div class="exppro">
                    <p>
                      Site marchant pour mettre en pratique nos connaissances
                      sur NodeJS et React
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <NavLink to="/portfolioreact">
                    <img
                      src="./portfolioreact1.png"
                      alt="PortfolioreactJSs"
                      style={{
                        width: "80%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="ReactPortfolio 2023"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    PortfolioReact
                  </p>

                  <div class="exppro">
                    <p>Portfolio fait avec le framework React.</p>
                  </div>
                </div>
              </div>
            </div>

            {/* AAndroid & Symfony*/}
            <div className="row">
              <div className="col">
                <div class="centrer">
                  <NavLink to="/android">
                    <img
                      src="./android.png"
                      alt="Android"
                      style={{
                        width: "29%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="AndroidSicilylines 2023 "
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    AndroidSicilylines
                  </p>

                  <div class="exppro">
                    <p>
                      Application mobile avec Android Mobile App Developer Tools
                    </p>
                  </div>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <NavLink to="/symfony">
                    <img
                      src="./symfonypage.png"
                      alt="SymfonySicilylines"
                      style={{
                        width: "80%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="SymfonySicilylines 2023"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    SymfonySicilylines
                  </p>

                  <div class="exppro">
                    <p>
                      Réservation de traversée sur Symfony avec MariaDB et PHP8
                    </p>
                  </div>
                </div>
              </div>
            </div>

            {/* Angular*/}
            <div className="row">
              <div className="col">
                <div class="centrer">
                  <NavLink to="/angular">
                    <img
                      src="./angularpage.png"
                      alt="angular"
                      style={{
                        width: "50%",
                        borderRadius: "5%",
                        border: "solid rgb(39, 158, 167) ",
                        boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
                      }}
                      title="Angular Portfolio 2023"
                    ></img>
                  </NavLink>
                  <div class="saut0"></div>
                  <p
                    style={{
                      fontSize: "24px",
                      height: "30px",
                      fontWeight: "bold",
                    }}
                  >
                    Portfolio en Angular{" "}
                  </p>

                  <div class="exppro">
                    <p>
                      J'ai créé un portfolio en autodidacte afin d'acquérir des
                      compétences dans l'utilisation d'Angular.{" "}
                    </p>
                  </div>
                </div>
              </div>
            </div>
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
    </div>
  );
};

export default Projetspage;
