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
      <div className="categoryName">{/* {props.category} */} All Our Workshops</div>
      <div className="gridFormation">
        {props.dataFormations && props.dataFormations.map((e, index)=>(
          <div key={index} onClick={formationRasp}>
          <FormationItem title={e} />
        </div>
        ))}
      {/*   <div onClick={formationRasp}>
          <FormationItem title={"RaspBerry PI"} />
        </div>
        <div onClick={formationSTM}>
          <FormationItem title={"STM 32"} />
        </div>
        <div onClick={formationESP}>
          <FormationItem title={"ESP 32"} />
        </div>
        <div onClick={formationArd}>
          <FormationItem title={"Arduino"} />
        </div> */}
      </div>
    </div>
  );
}

export default Formations;
