import React, { useEffect, useState } from "react";
import "./machineService.css";
function MachineService(props) {
  const [hov, setHov] = useState("");
  const [hovContent, setHovContent] = useState("");
  const [read, setRead] = useState("Lire plus");
  const [newdescription, setnewDescription] = useState("");
  const [description, setDescription] = useState(
   props.descriptionmachine
  );



  function readMore(){
    if(read ==="Lire plus"){
      setRead("Lire moins");
      
    setnewDescription(description);
    setDescription(newdescription);
    }
    if(read ==="Lire moins"){
      setRead("Lire plus");
      setnewDescription(description);
      setDescription(newdescription);

    }
  }
  function hover() {
    setHov("carac");
    setHovContent(props.caracmachine);
  }
  function unhover() {
    setHov("");
    setHovContent("");
  }
  useEffect(() => {
    if (description.length > 300) {
      setnewDescription(description);
      setDescription(description.substring(0, 186)+"...");
      setRead("Lire plus")

    }else {
      setRead("")
    }
   

  }, []);
  return (
   
      <div className="wrapround" >
        <div
          className="imageround"
          onMouseEnter={hover}
          onMouseLeave={unhover}
          style={{ backgroundImage: props.image , backgroundSize:"contain" }}
        >
          <div className={hov}>{hovContent}</div>
        </div>
        <div className="descriptionMachineService1">
          <div className="titleround">{props.titlemachine}</div>

          <h6>Description :</h6>
          <span className="realDesc">{description}</span>
          <span className="readmore" onClick={readMore}>{read}</span>
        </div>
      </div>
      
   
  );
}

export default MachineService;
