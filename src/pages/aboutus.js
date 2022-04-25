import NavBar from "../elements/navBar";
import Footer from "../elements/footer";
import Header from "../homeElements/header";
import Stomach from "../aboutusElements/stomach";


function AboutUs(){
      return(
            <div>
            <div>
            <div className="back" style={{backgroundImage:" url('images/formation2.jpg')"}}></div>
            <header className="head">
              <NavBar type="about" />
              <Header
          id={"#aboutus"}

            button={"Know More About Us"}
            deco={"images/whoweare.png" }
            description={
              " Wanna know who we are, where we are, our team, our clients, our partners, our history ...? Check below 😉 ⬇️"
            }
          />
            </header>
            <Stomach/>
          </div>

          <Footer/>
          </div>
      );
}
export default AboutUs;