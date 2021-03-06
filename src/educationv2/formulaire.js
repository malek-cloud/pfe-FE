import React, { useEffect } from "react";
import "./education.css";
import axios from "axios";
import { useState, useRef } from "react";

function Formulaire(props) {
  const [load, setLoad] = useState(false);
  const [nameState, setNameState] = useState('');
  const [workshopChoice, setWorkshopChoice] = useState(props.formation.name);
  const [emailState, setEmailState] = useState('');
  const [profState, setProfState] = useState('');
  const [etabState, setEtabState] = useState('');
  const [numState, setNumState] = useState('');
  const [modeState, setModeState] = useState('In our space');
  const [certificatState, setCertificatState] = useState('');
  const [message, setMessage] = useState('');
  const name = useRef();
  const numero = useRef();
  const profession = useRef();
  const etablissement = useRef();
  const email = useRef();
  const mode = useRef();
  const workshop = useRef();
  const certificat = useRef();
  const url = process.env.REACT_APP_BACKEND_URL +"activities/joinWorkshop";
  const submit = async (event) => {
    event.preventDefault();
    setLoad(true);
    
    const data = await axios({
      method: "post",
      url: url,
      data: {
        participantName: name.current.value,
        partcipantPhone: numero.current.value,
        partcipantEmail: email.current.value,
        partcipantProfession: profession.current.value,
        partcipantCollege: etablissement.current.value,
        workshop: workshop.current.value,
        mode: modeState,
        certificat: certificatState,
      },
    });
   

    if (data.status === 200) {
      setLoad(false);
      setMessage("Votre demande a été envoyer avec success ✔");

      setTimeout(()=>{setMessage("")}, 6000);
      setNameState('');
      setEmailState('');
      setProfState('');
      setEtabState('');
      setNumState('');
      setCertificatState('');
    } else {
      setMessage("une erreur s'est produite veuillez réessayer svp !");
   
      setLoad(false);
      setTimeout(()=>{setMessage("")}, 6000);

    }
  };
  function handleChange(event){
    if(event.target.value){
      setWorkshopChoice(event.target.value);
    } 
  }
  useEffect(()=>{
    setWorkshopChoice(props.formation.name)
  },[props.formation.name])
  return (
    <div>
      <div className="askForm">
        <div className="goalform">
        Participate / Organize this training or another in your establishment
        </div>
        <div className="horizSepLine"></div>

      
       <div className="textInput">
          <div className="labelInput">
            Full Name : <b>*</b>
          </div>
          <input
          value={nameState}
          autoComplete="on"
            ref={name}
            className="askformationinput"
            type="text"
            placeholder="nom.."
            onChange={e=>{
              setNameState(e.target.value)
            }}
          />
        </div>
        <div className="textInput">
          <div className="labelInput">
            Mobile Number : <b>*</b>
          </div>
          <input
          value={numState}
          onChange={e=>{
            setNumState(e.target.value)
          }}
          autoComplete="on"
            ref={numero}
            className="askformationinput"
            type="number"
            placeholder="25447412.."
          />
        </div>
        <div className="textInput">
          <div className="labelInput">Job : </div>
          <input
          onChange={e=>{
            setProfState(e.target.value)
          }}
          autoComplete="on"
          value={profState}
            ref={profession}
            className="askformationinput"
            type="text"
            placeholder="job.."
          />
        </div>
        <div className="textInput">
          <div className="labelInput">College : </div>
          <input
          autoComplete="on"
          value={etabState}
          onChange={e=>{
            setEtabState(e.target.value)
          }}
            ref={etablissement}
            className="askformationinput"
            type="text"
            placeholder="entreprise / university.."
          />
        </div>
        <div className="textInput">
          <div className="labelInput">
            Email : <b>*</b>
          </div>
          <input
          value={emailState}

          autoComplete="on"
          onChange={e=>{
            setEmailState(e.target.value)
          }}
            ref={email}
            className="askformationinput"
            type="email"
            placeholder="email.."
          />
        </div>

        <div className="selectform" >
          <label htmlFor="pet-select" className="lieuFormation">
            Workshop : <b>*</b>
          </label>
         <select
            name="formations"
            id="formations"
            onChange={handleChange}
            className="selection"
            ref={workshop}
            value={workshopChoice}
            
          >
            {props.data.map((e, index)=>{
               return  <option  key={index} value={e.name}>{e.name}</option>
              })}
          </select>
        </div>

        <div className="selectform"  >
          <label htmlFor="pet-select" className="lieuFormation">
            Mode : <b>*</b>
          </label>
          <select
          value={modeState}
            name="formations"
            id="formations"
            onChange={e=>{setModeState(e.target.value)}}
            className="selection"
            ref={mode}
          >
            <option value="In our space">In our space</option>
            <option value="En ligne">Online</option>
          </select>
        </div>
        <div className="selectform" >
          <label htmlFor="pet-select" className="lieuFormation">
            Certification :
          </label>
          <select
          value={certificatState}
            name="formations"
            id="formations"
            className="selection"
            ref={certificat}
            onChange={e=>{setCertificatState(e.target.value)}}
          >
            <option value=""></option>
            <option value="Avec Certification IT">Avec Certification IT</option>
            <option value="Sans certification IT">Sans certification IT</option>
          </select>
        </div>

        {load ? (
          <div className="spinner-border" role="status">
            <span className="sr-only">Loading...</span>
          </div>
        ) : (
          <div className="submitAsk" onClick={submit} style={{marginLeft:"20px"}}>
            Join
          </div>
        )}
    
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
  );
}

export default Formulaire;
