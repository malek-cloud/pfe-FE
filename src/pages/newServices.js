import NavBar from "../elements/navBar";
import Footer from "../elements/footer";
import Machine from "../newServices/machine";
import VideoHeader from "../newServices/videoHeader";
import NewServices from "../newServices/newServices";

function Services() {
  return (
    <div>
      
        <NavBar type="service" />
        <VideoHeader />
     
        <NewServices />
      <Footer />
    </div>
  );
}
export default Services;
