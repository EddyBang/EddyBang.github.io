import React from "react";

const Projetspage = () => {
  return (
    <div>
      <div class="affich" style={{ height: "100px" }}>
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
                <a href="harrypotter">
                  <img
                    src="./harrypotter.jpg"
                    alt="harrypotter"
                    style={{ width: "45%", borderRadius: "5%",              border: "solid rgb(39, 158, 167) ",
                    boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)", }}
                  ></img>
                </a>

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
                    Création d'un site en HTML et CSS avec le thème de Harry Potter.
                  </p>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <a href="haribo">
                    <img
                      src="./bonbon.jpg"
                      alt="haribo"
                      style={{ width: "45%", borderRadius: "5%",              border: "solid rgb(39, 158, 167) ",
                      boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)", }}
                    ></img>
                  </a>
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
                      connaissance en PHP.
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div class="row">
              <div className="col">
                <a href="fiteddypage">
                  <img
                    src="./mvc.png"
                    alt="fiteddy"
                    style={{ width: "50%", borderRadius: "5%",              border: "solid rgb(39, 158, 167) ",
                    boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)", }}
                  ></img>
                </a>
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
                    connaissance en Java et PHP pour faire un MVC
                  </p>
                </div>
              </div>
              <div className="col">
                <div class="centrer">
                  <a href="sicilylinespage">
                    <img
                      src="./frontapp.png"
                      alt="Sicilylines"
                      style={{ width: "80%", borderRadius: "5%",              border: "solid rgb(39, 158, 167) ",
                      boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)", }}
                    ></img>
                  </a>
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
                      Application pour faire des réservation de traversée créer
                      sur C#.
                    </p>
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
