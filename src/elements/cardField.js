
import "./cardField.css";

function CardField(props) {
  return (
   
      <div className="containerField">
        <div className="containerTitle">
          <h4>{props.title}</h4>
        </div>
        <div className="descrip">{props.description}</div>
        <a href="/" className="buttonDetail">
          Details
        </a>
      </div>
  
  );
}
export default CardField;
