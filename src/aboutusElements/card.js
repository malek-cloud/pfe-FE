import "./team.css";
function Card(props) {
  return (
    <div class="team">
      <img className="member" src={props.image} alt="" />
      <div class="content">
        <h3>{props.title}</h3>
        <p className="descripServices">{props.description}</p>
        <p className="descripServices">{props.phone}</p>
        <p className="descripServices">{props.email}</p>
        <p className="descripServices">{props.position}</p>
        
      </div>
    </div>
  );
}
export default Card;
