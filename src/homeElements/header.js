import "../styles/header.css";
function Header(props) {
  return (
    <div className="intro">
      <div className="text">
        <div className="bemaker">Maker Skills Up</div>
        <div className="description">
          {props.description}
        </div>
        <a href={props.id} style={{textDecoration:"none"}}>
        <div className="explore">{props.button}</div>
        </a>
      </div>
      <div>
        <img className="lampe" src={props.deco} alt="" />
      </div>
     
    </div>
  );
}
export default Header;
