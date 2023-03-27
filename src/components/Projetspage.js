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
                    Portoflio en React
                  </p>

                  <div class="exppro">
                    <p>Portfolio fait avec le framework React.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projetspage;


