import "./cardServices.css";

function CardServices(props) {
  return (
    <div className="containerService">
      <img className="image" src={props.image} alt="" />
      <h3>{props.title}</h3>
      <p className="descripServices">
          {props.description}
        </p>
        <a href="/" className="details" >Details</a>
  
    </div>
  );
}
export default CardServices;