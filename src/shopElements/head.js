import NavBar from "../elements/navBar";
import "../shopElements/shop.css";
function Head(props) {
  return (
    <div>
      <div className="backnavbar">
        <NavBar type={props.type} />
      </div>
      <h2 className="  help ">
        <div className="helptext">Need help to command ? call 25 801 660</div>
      </h2>

      </div>
  );
}
export default Head;
