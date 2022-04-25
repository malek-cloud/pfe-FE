import "./location.css";
import { MapContainer } from "./map ";
function Location() {
  return (
    <div >
      <div className="advantageTitle">Location </div>
      <div className="location">
        <div className="textLocation">
          ✔️ 10 Bis Rue d'Algerie 1001 Tunis, Tunisie
          <br />
          ✔️ bemaker.contact@gmail.com
          <br />
          ✔️ +216 26 995 159 <br />
          ✔️ http://www.bemaker.tn/ <br />

          </div>
       <MapContainer/>

      </div>
    </div>
  );
}
export default Location;
