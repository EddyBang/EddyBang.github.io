import React from 'react';

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
    <a href="projets" style={{color: "#0066b2",textDecoration: "none !important"}}>
        Projets 
    </a>
     CandyShop "Haribo"
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-egg-fried" viewBox="0 0 16 16">
        <path d="M8 11a3 3 0 1 0 0-6 3 3 0 0 0 0 6z"/>
        <path d="M13.997 5.17a5 5 0 0 0-8.101-4.09A5 5 0 0 0 1.28 9.342a5 5 0 0 0 8.336 5.109 3.5 3.5 0 0 0 5.201-4.065 3.001 3.001 0 0 0-.822-5.216zm-1-.034a1 1 0 0 0 .668.977 2.001 2.001 0 0 1 .547 3.478 1 1 0 0 0-.341 1.113 2.5 2.5 0 0 1-3.715 2.905 1 1 0 0 0-1.262.152 4 4 0 0 1-6.67-4.087 1 1 0 0 0-.2-1 4 4 0 0 1 3.693-6.61 1 1 0 0 0 .8-.2 4 4 0 0 1 6.48 3.273z"/>
      </svg>
      2022
              </div>

              <div class="container">
                <div class="exppro">
                <p>
        Site créer pour mettre en pratique nos premières connaissance de première année. Nous avons ici utilisé principalement du PHP pour créer des fonctionnalités tel qu'ajouter, modifier ou supprimer des bonbons de la base de données. Nous pouvons aussi mettre des produits dans un panier où le prix total de tous les produits sont calculer.
    </p>
    <p>
        Source:
        <a href="https://github.com/BanggEddy/Haribo" style={{transition: "1s",color: "#6B8E23",textDecoration: "none !important"}}>
            Consulter le projet
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" class="bi bi-box-arrow-up-right" viewBox="0 0 16 16">
                <path fill-rule="evenodd" d="M8.636 3.5a.5.5 0 0 0-.5-.5H1.5A1.5 1.5 0 0 0 0 4.5v10A1.5 1.5 0 0 0 1.5 16h10a1.5 1.5 0 0 0 1.5-1.5V7.864a.5.5 0 0 0-1 0V14.5a.5.5 0 0 1-.5.5h-10a.5.5 0 0 1-.5-.5v-10a.5.5 0 0 1 .5-.5h6.636a.5.5 0 0 0 .5-.5z"/>
                <path fill-rule="evenodd" d="M16 .5a.5.5 0 0 0-.5-.5h-5a.5.5 0 0 0 0 1h3.793L6.146 9.146a.5.5 0 1 0 .708.708L15 1.707V5.5a.5.5 0 0 0 1 0v-5z"/>
              </svg>
        </a>

    </p>
                </div>
              </div>

              <p>
        Stack : HTML / CSS / PHP
    </p>
            </div>
          </div>
        </div>
        <div class="saut"></div>
        <div class="container" style={{ height: "1350px" }}>
          <img
            src="./bonbon.jpg"
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
            src="./bonbon2.jpg"
            alt="bonbon2front"
            style={{
              width: "600px",
              height: "400px",
              borderRadius: "5%",
              boxShadow: "10px 10px 10px #aaaaaa",
            }}
          ></img>
          <div class="saut"></div>
          <img
            src="./bonbon3.jpg"
            alt="bonbonfront3"
            style={{
              width: "600px",
              height: "400px",
              borderRadius: "5%",
              boxShadow: "10px 10px 10px #aaaaaa",
            }}
          ></img>
        </div>
      </div>
        </div>
    );
};

export default Haribofront;