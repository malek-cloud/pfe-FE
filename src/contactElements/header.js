import "../styles/header.css";
function Header(props) {
  return (
    <div class="intro">
      <div class="text">
        <div class="bemaker">Be Maker</div>
        <div class="description">
          {props.description}
        </div>
        <a href={props.id} style={{textDecoration:"none"}}>
        <div class="explore">{props.button}</div>
        </a>
      </div>
      <div>
        <img class="lampe" src={props.deco} alt="" />
      </div>
     
    </div>
  );
}
export default Header;
