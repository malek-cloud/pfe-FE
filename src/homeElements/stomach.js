import "../styles/stomach.css";
import "../styles/header.css";
import CarouselField from "../elements/carouselField";
import CarouselServices from "../elements/carouselServices";
import CarouselProject from "../elements/carouselProjects";
import Advantage from "../elements/advantages";
import AboutUs from "../elements/aboutus";
function Stomach() {
  return (
    <section>
     {/*  <div className="inn">
        <img id="innovation" src="images/innovation.png" alt="" />
        
      </div>
      <div className="line"></div>
      */}
      

      <div className="services">
        <AboutUs />
        
        <CarouselField />
        <CarouselServices />
        <CarouselProject/>
        <Advantage/>
      </div>
    </section>
  );
}
export default Stomach;
