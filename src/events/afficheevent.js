import React, { useState } from "react";
import "./event.css";
function Afficheevent() {
  const [participate, setParticipate] = useState(false);
  return (
    <div className="eventpage">
      <div className="soon">Event Coming Soon</div>
      <div className="tuned">Stay Tuned !</div>
      <img className="joinEventImage" src="/images/eventAttends.png" alt="" />
      <div className="typeevent">Hackathon : Drone Challenge Arena</div>
      {/*      <div className="challenge">Drone Challenge Arena</div> */}
      <div className="date">10 July 2022</div>
      <div className="animatedDate">
        <div className="specificdate">
          <div className="blocks">
            <div className="block">2</div>
            <div className="block">9</div>
          </div>
          <div className="what">Days</div>
        </div>
        <div className="specificdate">
          <div className="blocks">
            <div className="block">1</div>
            <div className="block">9</div>
          </div>
          <div className="what">Hours</div>
        </div>
        <div className="specificdate">
          <div className="blocks">
            <div className="block">3</div>
            <div className="block">1</div>
          </div>
          <div className="what">Minutes</div>
        </div>
      </div>

      <div className="intersted">Are you interested ?</div>
      <div
        className="joinEvent"
        onClick={() => {
          setParticipate(!participate);
        }}
      >
       <a href="#participateEvent" style={{textDecoration:"none" , color :"white"}}>Participate</a>
      </div>
      {participate ? (
        <div className="participation" id="participateEvent">
          <div className="fillform" >
          Fill out this form to register
          </div>
          <div className="partinline">
            <div className="descrblock">
              {/*   <img className="eventImage" src="/images/dronevent.jpg" alt="" /> */}
              <div className="eventDescription">
                <div className="descriptionTitle">
                Your mission, if you accept it
                </div>
                <div className="realdesc">
                In a team of 1 to 5 people, present your project in 5 slides
                   (PDF format) then drop it on the platform before 1
                   July 11:59 pm <br />
                   Don't forget to submit your CV as well as those of the members of
                   your team so that you can be spotted by our team.<br />
                   Announcement of the 20 selected teams: July 4. <br />
                   or this 2nd stage, 20 teams will be invited to deepen
                   their projects, accompanied by our mentors.
                  <br />
                  The expected deliverable is a file of 20 slides (PDF format).
                  <br />
                  Do not hesitate to suggest additional documents (videos, images,
                   mockups, etc.) in order to convince the Jury.
                  <br />
                  Announcement of the 5 finalist teams: 10 January.
                  <br />
                  The 5 finalist teams will be invited to pitch their
                   project in front of the management committee!<br />
                   Oral presentations should not exceed 5 minutes
                   and will take place at the beginning of February at our headquarters <br />
                   At the end of this day, all teams will be
                   rewarded! <br />
                </div>
              </div>
              {/*    <img className="joinEventImage" src="" alt="" /> */}
            </div>
          
              <div className="formEvent">
                <div className="titreEvent">
                Participate in this event
                </div>
                <div style={{marginLeft:"40px" }} className="horizSepLine"></div>

                <div className="textInput">
                  <div className="labelInput">
                    Full Name : <b>*</b>
                  </div>
                  <input
                    className="askformationinput"
                    type="text"
                    placeholder="nom.."
                  />
                </div>
                <div className="textInput">
                  <div className="labelInput">
                    Mobile number : <b>*</b>
                  </div>
                  <input
                    className="askformationinput"
                    type="number"
                    placeholder="téléphone.."
                  />
                </div>
                <div className="textInput">
                  <div className="labelInput">Job : </div>
                  <input
                    className="askformationinput"
                    type="text"
                    placeholder="profession.."
                  />
                </div>
                <div className="textInput">
                  <div className="labelInput">College : </div>
                  <input
                    autoComplete="on"
                    className="askformationinput"
                    type="text"
                    placeholder="entreprise / faculté.."
                  />
                </div>
                <div className="textInput">
                  <div className="labelInput">
                    Email : <b>*</b>
                  </div>
                  <input
                    className="askformationinput"
                    type="email"
                    placeholder="email.."
                  />
                </div>
                <div className="textInput">
                  <div className="labelInput">
                    Team members
                  </div>
                  <input
                    className="askformationinput"
                    type="text"
                    placeholder="Noms des membres.."
                  />
                </div>

                <div className="submitAsk" style={{marginLeft:"28px"}}>Join</div>
              </div>
            
          </div>
        </div>
      ) : (
        <div></div>
      )}
    </div>
  );
}

export default Afficheevent;
