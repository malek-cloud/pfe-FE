import React from "react";
import FormationItem from "./formationItem";
import "./education.css";
function Formations(props) {
  function formationRasp() {
    props.selectFormation("RaspBerry PI");
    props.selectCategory("RaspBerry PI");
  }
  function formationSTM() {
    props.selectFormation("STM 32");
    props.selectCategory("STM 32");

  }
  function formationESP() {
    props.selectFormation("ESP 32");
    props.selectCategory("ESP 32");

  }
  function formationArd() {
    props.selectFormation("Arduino");
    props.selectCategory("Arduino");
  }

  return (
    <div className="formationsBlock">
      <div className="categoryName">{props.title}</div>
      {props.filter ? 
      <div className="gridFormation">
        {props.workshopsToShow.map((e, index)=>(
          <div key={index} onClick={()=>{props.selectFormation(e)}}>
          <FormationItem title={e.name} />
        </div>
        ))} </div> : 
        <div className="gridFormation">
        {props.data.map((e, index)=>(
          <div key={index} onClick={()=>{props.selectFormation(e)}}>
          <FormationItem title={e.name} />
        </div>
        ))} </div> 
      }
    
    </div>
  );
}

export default Formations;
