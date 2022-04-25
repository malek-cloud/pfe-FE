import "../styles/header.css";
import NavBar from "../elements/navBar";
import Footer from "../elements/footer";
import Header from "../homeElements/header";
import Contact from "../contactElements/stomach";

function Home() {
  return (
    <div style={{backgroundColor:"rgb(233, 233, 233)" , overflowX: "hidden"}}>
      <div>
        <div
          className="back"
          style={{ backgroundImage: " url('images/formation2.jpg')" }}
        ></div>
       <header className="head">
              <NavBar type="contact" />
              <Header
          id={"#contactform"}

            button={"Contact Us"}
            deco={"images/whitelampe.png" }
            description={
              " And here is our contact form, if you have anything in your mind that you wanna share with us, don't hesitate to do it body 😉 ⬇️"
            }
          />
        </header>
      </div>
      <Contact />
      <Footer />
    </div>
  );
}
export default Home;
