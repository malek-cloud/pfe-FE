import "./categories.css";
function Categories(props) {
  function getRobotique() {
    props.setRobotique(true);
    props.setCarte(false);
    props.setIot(false);
    props.setLaser(false);
    props.setArduino(false);
    props.setCapteur(false);
    props.setAccessoires(false);
    props.setCategory("kit Robotique")

  }
  function getCarte() {
    props.setRobotique(false);
    props.setLaser(false);
    props.setCategory("carte de développement")
    props.setCarte(true);
    props.setIot(false);
    props.setArduino(false);
    props.setCapteur(false);
    props.setAccessoires(false);
  }
  function getIot() {
    props.setLaser(false);
    props.setRobotique(false);
    props.setCarte(false);
    props.setIot(true);
    props.setArduino(false);
    props.setCapteur(false);
    props.setAccessoires(false);
    props.setCategory("kit IOT")

  }
  function getArduino() {
    props.setLaser(false);
    props.setRobotique(false);
    props.setCarte(false);
    props.setIot(false);
    props.setArduino(true);
    props.setCapteur(false);
    props.setAccessoires(false);
    props.setCategory("kit Arduino")

  }
  function getCapteur() {
    props.setLaser(false);
    props.setRobotique(false);
    props.setCarte(false);
    props.setIot(false);
    props.setArduino(false);
    props.setCapteur(true);
    props.setAccessoires(false);
    props.setCategory("capteur");

  }
  function getAccessoires() {
    props.setRobotique(false);
    props.setLaser(false);
    props.setCarte(false);
    props.setIot(false);
    props.setArduino(false);
    props.setCapteur(false);
    props.setAccessoires(true);
    props.setCategory("accessoire");

  }
  function getLaser() {
    props.setRobotique(false);
    props.setLaser(true);
    props.setCarte(false);
    props.setIot(false);
    props.setArduino(false);
    props.setCapteur(false);
    props.setAccessoires(false);
    props.setCategory("clipart découpe laser");

  }
  return (
    <div className="c">
      <div className="catTitle">Catégories</div>
      <div className="semiyellowLine">
        <div className="firsthorline"></div>
        <div className="secondhorline"></div>
      </div>
      <div className="listCategories">
        <div className="elementcat" onClick={getCarte}
           style={{
            color: props.category==="carte de développement" ? "rgba(49, 3, 68)" : "black",
            fontWeight: props.category==="carte de développement" ? "800" : "300",

            textDecoration: props.category==="carte de développement"  ? "underline" : "none",
          }}
        >
          Cartes De Développement
        </div>
        <div className="elementcat" onClick={getRobotique}
          style={{
            color: props.category==="kit Robotique"  ? "rgba(49, 3, 68)" : "black",
            fontWeight: props.category==="kit Robotique"  ? "800" : "300",

            textDecoration: props.category==="kit Robotique" ? "underline" : "none",
          }}>
          Kit Robotique
        </div>


        <div className="elementcat" onClick={getIot}
         style={{
          color: props.category==="kit IOT"  ? "rgba(49, 3, 68)" : "black",
          fontWeight: props.category==="kit IOT"  ? "800" : "300",

          textDecoration: props.category==="kit IOT"  ? "underline" : "none",
        }}>
          Kit IOT
        </div>

        
        <div className="elementcat" onClick={getArduino}
         style={{
          color: props.category==="kit Arduino"  ? "rgba(49, 3, 68)" : "black",
          fontWeight: props.category==="kit Arduino"  ? "800" : "300",

          textDecoration: props.category==="kit Arduino"  ? "underline" : "none",
        }}>
          Kit Arduino
        </div>
        <div className="elementcat" onClick={getLaser}
        style={{
          color: props.category==="clipart découpe laser"  ? "rgba(49, 3, 68)" : "black",
          textDecoration: props.category==="clipart découpe laser"  ? "underline" : "none",
          fontWeight: props.category==="clipart découpe laser"  ? "800" : "300",

        }}
        >
          Clipart Découpe au Laser
        </div>
        <div className="elementcat" onClick={getCapteur}
        style={{
          color: props.category==="capteur"  ? "rgba(49, 3, 68)" : "black",
          fontWeight: props.category==="capteur" ? "800" : "300",

          textDecoration: props.category==="capteur" ? "underline" : "none",
        }}
        >
          Capteur
        </div>
        <div className="elementcat" onClick={getAccessoires}
        
        style={{
          color: props.category==="accessoire" ? "rgba(49, 3, 68)" : "black",
          fontWeight: props.category==="accessoire" ? "800" : "300",

          textDecoration: props.category==="accessoire" ? "underline" : "none",
        }}>
          Accessoires
        </div>
      </div>
    </div>
  );
}
export default Categories;
