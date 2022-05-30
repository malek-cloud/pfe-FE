import React, {useState, useRef} from 'react'
import axios from 'axios'
function EventForm(props) {
      const [load, setLoad] = useState(false);
      const [nameState, setNameState] = useState('');
      const [emailState, setEmailState] = useState('');
      const [profState, setProfState] = useState('');
      const [etabState, setEtabState] = useState('');
      const [numState, setNumState] = useState('');
      const [team, setTeam] = useState('');
      const [message, setMessage] = useState('');
      const name = useRef();
      const numero = useRef();
      const profession = useRef();
      const college = useRef();
      const email = useRef();
      const teamMembers = useRef();
      const url = process.env.REACT_APP_BACKEND_URL +"activities/joinEvent";
      const joinEvent = async(event)=>{
            event.preventDefault();
            setLoad(true)
            const data = await axios({
                  method: "post",
                  url: url,
                  data: {
                    participantName: name.current.value,
                    partcipantPhone: numero.current.value,
                    partcipantEmail: email.current.value,
                    partcipantProfession: profession.current.value,
                    partcipantCollege: college.current.value,
                    teamMembers: teamMembers.current.value,
                    eventName : props.eventName,
                  },
                });
                setLoad(false)
                if (data.status === 200) {
                  setLoad(false);
                  setMessage("Votre demande a été envoyer avec success ✔");
                  console.log("hedha msg " + message);
                  setTimeout(()=>{setMessage("")}, 6000);
                  setNameState('');
                  setEmailState('');
                  setProfState('');
                  setEtabState('');
                  setNumState('');
                  setTeam('');
                } else {
                  setMessage("une erreur s'est produite veuillez réessayer svp !");
                  console.log("hedha msg " + message);
                  setLoad(false);
                  setTimeout(()=>{setMessage("")}, 6000);
            
                }
      }
  return (
    <div>
          <div className="formEvent">
              <div className="titreEvent">Participate in this event</div>
              <div className="horizSepLine"></div>

              <div className="textInput">
                <div className="labelInput">
                  Full Name : <b>*</b>
                </div>
                <input
                ref={name}
                value={nameState}
                onChange={e=>{
                  setNameState(e.target.value)
                }}
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
                 value={numState}
                 onChange={e=>{
                   setNumState(e.target.value)
                 }}
                   ref={numero}
                  className="askformationinput"
                  type="number"
                  placeholder="téléphone.."
                />
              </div>
              <div className="textInput">
                <div className="labelInput">Job : </div>
                <input
                 value={profState}
                 onChange={e=>{
                   setProfState(e.target.value)
                 }}
                   ref={profession}
                  className="askformationinput"
                  type="text"
                  placeholder="profession.."
                />
              </div>
              <div className="textInput">
                <div className="labelInput">College : </div>
                <input
                 value={etabState}
                 onChange={e=>{
                   setEtabState(e.target.value)
                 }}
                   ref={college}
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
                 value={emailState}
                 onChange={e=>{
                   setEmailState(e.target.value)
                 }}
                   ref={email}
                  className="askformationinput"
                  type="email"
                  placeholder="email.."
                />
              </div>
              <div className="textInput">
                <div className="labelInput">Team members</div>
                <input
                 value={team}
                 onChange={e=>{
                   setTeam(e.target.value)
                 }}
                   ref={teamMembers}
                  className="askformationinput"
                  type="text"
                  placeholder="Noms des membres.."
                />
              </div>

            {!load  ?   <div className="submitAsk" onClick={joinEvent}>Join</div> : <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>}
             <div
             style={{ transition:"0.8s",
               color:
                 message === "Votre demande a été envoyer avec success ✔"
                   ? "green"
                   : "red",
             }}
           >
             {message}
           </div>
            </div>
    </div>
  )
}

export default EventForm