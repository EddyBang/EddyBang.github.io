import React from "react";

const Parcourspage = () => {
  return (
    <div>
      <div className="affich2">
        <div className="container">
          <div className="moi">
            <d>
              <b style={{fontSize:"20px"}}>Mes Formations</b>
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
                    <button style={{width:"auto", fontSize:"12px"}}>
                    Lycée de Cachan

                    </button>
                  </a>
                </div>
                          {/*Card pour le Bac*/}

                                <div className="col">
                <br></br>
            
                  <img
                    src="./bac.png"
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
                    <button style={{width:"auto", fontSize:"12px"}}>
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
                <b style={{fontSize:"20px"}}> Mes expériences professionnelles</b>
              </d>
            </div>
            <br></br>
            
{/*Card pour première année*/}
            <div class="card">
            
            <div class="card-content">

            <div class="row">
              <div class="col">
   
              <br></br>                <br></br>
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
            
                  Stage de Première Année
                </p>
                <p>30 mai - 1 juillet 2022</p>
                <div class="exppro" style={{fontSize:"11px"}}>
                  <p>
                    Réalisation d’un site web de musculation avec l’architecture
                    MVC. Création d’un CRUD en lien avec la base de données sur
                    PhpMyAdmin.
                  </p>
                  <p>Site réalisée avec : CSS / PHP / MySQL / JS</p>
                  <p>
                    Cette expérience a été très enrichissante et m'a apporté un
                    très bon premier contact avec le monde professionnel de
                    l'informatique.
                  </p>
                </div>
                <a
                  href="fiteddy"
                  style={{ textDecoration: "none", color: "#00BFFF" }}
                >
                  <button style={{width:"auto", fontSize:"12px"}}>
                  Consulter le projet

                  </button>
                </a>
                  
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
 
       Stage de Deuxième Année
     </p>
     <p>30 mai - 1 juillet 2022</p>
     <div class="exppro" style={{fontSize:"11px"}}>
       <p>
         Réalisation d’un site web de vêtement en ReactJS en front-end et NodeJS en back-end. Création d’un CRUD en lien avec la BDD de MongoDB.
       </p>
       <p>Site réalisée avec : NodeJS, ReactJS, MongoDB</p>
       <p>
         Ce stage m'a permis de découvrir de nouveau languague pour pouvoir élargir mes connaissances sur Javascript avec ses frameworks et de la BDD MongoDB 
       </p>
     </div>
     <a
       href="Vet"
       style={{ textDecoration: "none", color: "#00BFFF" }}
     >
       <button style={{width:"auto", fontSize:"12px"}}>
       Consulter le projet

       </button>
     </a>
       
     </div>
                </div>
                <br></br>
          </div>

              
              
            </div>
          


              
              
            </div>
          </div>
        </div>

      









    </div>

  );
};



export default Parcourspage;
