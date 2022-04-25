import "../styles/header.css";
import Footer from "../elements/footer";
import Stomach from "../homeElements/stomach";

import HeaderCarousel from "../homeElements/headerCarousel"

function Home() {
  return (
    <div>
      <HeaderCarousel type={"overview"}/>
      {/* <div>
        <div
          className="back"
          style={{ backgroundImage: " url('images/formationRb.jpg')" }}
        ></div>
        <header className="head">
          <NavBar type="overview" />
          <Header
          id={"#programs"}
          deco={"images/whitelampe.png" }
            button={"Explore Our Programs"}
            description={
              " Be Maker is a maker space to learn new technologies and enhance innovation"
            }
          />
        </header>
          </div> */}
      <Stomach />
      <Footer />
    </div>
  );
}
export default Home;
