import React from "react";
function DetailedFormation(props) {
  function retour() {
    props.selectFormation("");
    props.selectCategory("Systéme Embarqué")
  }
  return (
    <div className="detailedFormation">
      <div className="detailTitle">
        <div className="return" onClick={retour}>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width="32"
            height="32"
            fill="currentColor"
            className="bi bi-arrow-left"
            viewBox="0 0 16 16"
          >
            <path
              fillRule="evenodd"
              d="M15 8a.5.5 0 0 0-.5-.5H2.707l3.147-3.146a.5.5 0 1 0-.708-.708l-4 4a.5.5 0 0 0 0 .708l4 4a.5.5 0 0 0 .708-.708L2.707 8.5H14.5A.5.5 0 0 0 15 8z"
            />
          </svg>
        </div>
        <div className="formationTitleDetail">{props.formation}</div>
      </div>
      <div className="inlineImage">
      <img className="imageFormation" src="/images/raspberry.png" alt="" />

        <div className="mobileCenter">

          <div className="workshopBenefits">
            <div className="workshopbenefit">✔ Commencer à partir de zéro</div>
            <div className="workshopbenefit">✔ Apprendre les notions</div>
            <div className="workshopbenefit">
              ✔ Developper un projet IOT de zéro
            </div>
            <div className="workshopbenefit">
              ✔ Gagnez un certificat et mettez en valeur vos compétences
            </div>
          </div>
          <div className="participateButton"> S'inscrire Maintenant</div>
        </div>
      </div>

      <div className="participateline">
        <div className="formationContent">
          <ul>
            <div className="objectifFormation">Objectifs de la formation</div>
            <div className="levelFormation">Niveau 1 : </div>
            <li>Configurer, installer et prendre en main une Raspberry Pi</li>
            <li>Tirer parti de Python pour exploiter la carte</li>
            <div className="levelFormation">Niveau 2 : </div>
            <li>Dialoguer avec des composants : leds, moteurs, caméra</li>
            <li>Échanger des données au travers d'une liaison sére</li>
          </ul>
        </div>
        <div className="tabledetail">
          <div className="rowTableDetail">
            <b>💰 Prix : </b> 120DT
          </div>
          <div className="rowTableDetail">
            <b>🕒 Duration : </b> 20H
          </div>
          <div className="rowTableDetail">
            <b>💁‍♂ Age : </b> &gt; 18ANS{" "}
          </div>
          <div className="rowTableDetail">
            <b>💪🏻 Difficulté : </b> moyenne
          </div>
        </div>
      </div>
      <div className="coveredTopics">
        <div className="coveredTopicRef">Sujets à couvrir dans l'atelier :</div>
        <div className="topic">➡ Starting with embedded systems</div>
        <div className="topic">➡ AVR Microcontroller Programming</div>
        <div className="topic">➡ Arduino jargon and terms</div>
        <div className="topic">➡ Arduino Basics</div>
        <div className="topic">➡ Arduino Architecture</div>
        <div className="topic">
          ➡ Arduino board layout. What are the resources available
        </div>
        <div className="topic">
          ➡ Applications of Embedded System in Biomedical Field
        </div>
        <div className="topic">➡ Programming fundamentals ( C language )</div>
        <div className="topic">
          ➡ Talking to your Android Phone with Arduino
        </div>
        <div className="topic">➡ Connecting Arduino with Mobile Device. </div>
      </div>
      <div className="coveredTopics">
        <div className="coveredTopicRef">Projets à realiser :</div>
        <div className="topic">
          ➡ Projet 1 : Simple LED Program
        </div>
        <div className="topic">
        ➡ Projet 2 :  LED Blinking 
        </div>
        <div className="topic">
        ➡ Projet 3 : Integrating Sensors & Reading Environmental Physical Values.
        </div>
      </div>
      <div className="coveredTopics">
        <div className="coveredTopicRef">Politique de certification :</div>
        <div className="topic">
          ➡ Certificat de mérite pour tous les participants à l'atelier
        </div>
        <div className="topic">
          ➡ A l'issue de cet atelier, un
          petit concours sera organisé parmi les étudiants participants et les
          gagnants se verront remettre un 'Certificat d'Excellence'.
          
        </div>
        <div className="topic">
          ➡ Certificate of Coordination for the coordinators of the campus
          workshops
        </div>
      </div>
    </div>
  );
}

export default DetailedFormation;
