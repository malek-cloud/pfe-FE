import "../elements/advantages.css";
import Card from "./card";
import "../styles/stomach.css";

function Partners() {
  return (
    <div className="all">
      <div className="advantageTitle">Partners & Supports </div>
      <div className="container1 ">
        <Card
          title={"JCI"}
          description={
            "✔️ Generally displayed in black, except on Windows where it is displayed in green. Commonly used in lists to signify completed tasks or verification of a statement "
          }
          image={"./images/formationMakerCV.jpg"}
        />
        <Card
          title={"FabLab"}
          description={
            "✔️ Generally displayed in black, except on Windows where it is displayed in green. Commonly used in lists to signify completed tasks or verification of a statement "
          }
          image={"./images/formationMicroDesign.jpg"}
        />
        <Card
          title={"Novatel IT"}
          description={
            "✔️ Generally displayed in black, except on Windows where it is displayed in green. Commonly used in lists to signify completed tasks or verification of a statement "
          }
          image={"./images/formationMakerCV.jpg"}
        />
      </div>
    </div>
  );
}
export default Partners;
