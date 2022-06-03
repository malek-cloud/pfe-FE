import React from "react";
function DetailedFormation(props) {
  function retour() {
    props.selectFormation("");

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
        <div className="formationTitleDetail">{props.formation.name}</div>
      </div>
      <div className="inlineImage">
      <img className="imageFormation" src={process.env.REACT_APP_BACKEND_URL + `${props.formation.images[0]}`} alt="" />

        <div className="mobileCenter">

          <div className="workshopBenefits">
            <div className="workshopbenefit">✔ Start from zero</div>
            <div className="workshopbenefit">✔ Learn the concepts</div>
            <div className="workshopbenefit">
              ✔ Develop projects from scratch
            </div>
            <div className="workshopbenefit">
              ✔ Earn a certificate and showcase your skills
            </div>
          </div>
          <div className="participateButton">Register Now</div>
        </div>
      </div>

      <div className="participateline">
        <div className="formationContent">
          <ul>
            <div className="objectifFormation">Workshop goals</div>
           {/*  <div className="levelFormation">Level 1 : </div>
            <li>Configure, install and take control of a Raspberry Pi</li>
            <li>Leverage Python to exploit the map</li>
            <div className="levelFormation">Level 2 : </div>
            <li>Dialog with components: leds, motors, camera</li>
            <li>Exchanging data through a serial link</li> */}
            {props.formation.description}
          </ul>
        </div>
        <div className="tabledetail">
          <div className="rowTableDetail">
            <b>💰 Price : </b> {props.formation.prix}
          </div>
          <div className="rowTableDetail">
            <b>🕒 Duration : </b> {props.formation.period}
          </div>
          <div className="rowTableDetail">
            <b>💁‍♂ Age : </b> &gt; 18YEARS{" "}
          </div>
          <div className="rowTableDetail">
            <b>💪🏻 Difficulty : </b> medium
          </div>
        </div>
      </div>
      <div className="coveredTopics">
        <div className="coveredTopicRef">Topics to cover in the workshop :</div>
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
        <div className="coveredTopicRef">Projects to be carried out :</div>
        <div className="topic">
          ➡ Project 1 : Simple LED Program
        </div>
        <div className="topic">
        ➡ Project 2 :  LED Blinking 
        </div>
        <div className="topic">
        ➡ Project 3 : Integrating Sensors & Reading Environmental Physical Values.
        </div>
      </div>
      <div className="coveredTopics">
        <div className="coveredTopicRef">Certification Policy:</div>
        <div className="topic">
          ➡ Certificate of achievement for all workshop participants
        </div>
        <div className="topic">
          ➡ At the end of this workshop, a
           small competition will be organized among the participating students and the
           winners will be presented with a 'Certificate of Excellence'.
          
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
