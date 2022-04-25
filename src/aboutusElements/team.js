import "../elements/advantages.css";
import Card from "./card";
import "../styles/stomach.css";

function Team() {
  return (
    <div className="all">
      <div className="advantageTitle">
        
        Let's make you discover our team 🤩{" "}
      </div>
      <div className="container1 ">

        <Card
          title={"Heithem Daboussi"}
          description={
            "✔️ Mecatronics Engineer "  
          }
          phone={
            "✔️ +216 25 801 660"
          } position={
            "✔️ CEO & instructor at Be Maker"
          }
          email={
            "✔️haithemdaboussi@gmail.com"
          }
          image={"./images/formationMakerCV.jpg"}
        />
        <Card
          title={"Malek Guedda"}
          description={
            "✔️ Computer Science Engineer"
          }
          phone={
            "✔️ +216 26 995 159"
          } position={
            "✔️ Developer & instructor at Be Maker"
          }
          email={
            "✔️ malekguedda23@gmail.com"
          }
          image={"./images/formationMicroDesign.jpg"}
        />
      </div>
    </div>
  );
}
export default Team;
