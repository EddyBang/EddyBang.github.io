import React from "react";
import { NavLink } from "react-router-dom";

const Portfolioreactpage = () => {
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
                ReactPortfolio
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="16"
                  height="16"
                  fill="currentColor"
                  class="bi bi-file-earmark-person"
                  viewBox="0 0 16 16"
                >
                  <path d="M11 8a3 3 0 1 1-6 0 3 3 0 0 1 6 0z" />
                  <path d="M14 14V4.5L9.5 0H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h8a2 2 0 0 0 2-2zM9.5 3A1.5 1.5 0 0 0 11 4.5h2v9.255S12 12 8 12s-5 1.755-5 1.755V2a1 1 0 0 1 1-1h5.5v2z" />
                </svg>
                2023
              </div>

              <div class="container">
                <div class="exppro">
                  <p>
                    Portfolio fait durant ma deuxième année de stage: utilisant
                    le framework React pour exploiter mes premières
                    connaissances sur React
                  </p>
                  <p>
                    Source:
                    <a
                      href="https://github.com/EddyBang/EddyBang.github.io"
                      style={{
                        transition: "1s",
                        color: "#6B8E23",
                        textDecoration: "none !important;",
                      }}
                    >
                      Consulter le projet
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

              <p>Stack : React </p>
            </div>
          </div>
        </div>
        <div class="saut"></div>
        <div class="container" style={{ height: "1350px" }}>
          <img
            src="./portfolioreact1.png"
            alt="portfolioreact1"
            style={{
              width: "800px",
              height: "400px",
              borderRadius: "6%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./portfolioreact2.png"
            alt="bonbon2front"
            style={{
              width: "800px",
              height: "400px",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
          <div class="saut"></div>

          <img
            src="./portfolioreact3.png"
            alt="bonbon2front"
            style={{
              width: "800px",
              height: "400px",
              borderRadius: "5%",
              border: "solid rgb(39, 158, 167) ",
              boxShadow: "1px 5px 12px 5px rgb(39, 158, 167)",
            }}
          ></img>
          <div class="saut"></div>
        </div>
      </div>
    </div>
  );
};

export default Portfolioreactpage;
