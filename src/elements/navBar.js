import "../styles/header.css";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from '../context/loginContext'
import {useName, useNameUpdate} from '../context/fcbGgle'
function NavBar(props) {
  const name = useName();
  const updateName = useNameUpdate();
  const auth = useContext(AuthContext);
  function toggle() {
    document.getElementsByClassName("links")[0].classList.toggle("active");
    document.getElementsByClassName("link")[0].classList.toggle("active");
    document.getElementsByClassName("link")[1].classList.toggle("active");
    document.getElementsByClassName("link")[2].classList.toggle("active");
    document.getElementsByClassName("link")[4].classList.toggle("active");
    document.getElementsByClassName("link")[3].classList.toggle("active");
    document.getElementsByClassName("ground")[0].classList.toggle("active");
  }

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
const [deconnectDrop, setDeconnectDrop]=useState(false);
const [connection, setConnection] = useState("Se Connecter");
const drop = ()=>{
/*   if(auth.isLoggedIn){setDeconnectDrop(!deconnectDrop)} */
if(connection !=="Sign In"){setDeconnectDrop(!deconnectDrop)}
}
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if(name!=="" && !auth.isLoggedIn){
      setConnection( "Hello " + name.split(/[, ]+/)[0])
    }else if(auth.isLoggedIn && auth.userName ){
      setConnection("Hello "+ auth.userName)
    }else if(name==="" ){
      setConnection("Sign In")
    }
    window.addEventListener("resize", detectSize);
  
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion, name]);
  return (
    <div>
      <nav id="navBar">
        <div className="completeLogo">
          <img src="/images/makerSkillsUp.jpg" className="logotext" alt="" />
          <div className="nameLogo">
            Maker
            <br />
            Skills Up
          </div>
        </div>

        <div className="ground">
          <div className="links">
            <Link
              to="/"
              className="link"
              style={{
                color: props.type === "overview" ? "#FCCD27" : "white",
                fontWeight: props.type === "overview" ? "bold" : "300",

                textDecoration:
                  props.type === "overview" ? "underline" : "none",
              }}
            >
              OverView
            </Link>
            <Link
              to="/learn"
              className="link"
              style={{
                color: props.type === "learn" ? "#FCCD27" : "white",
                fontWeight: props.type === "learn" ? "bold" : "300",

                textDecoration: props.type === "learn" ? "underline" : "none",
              }}
            >
              Learn
            </Link>
            <Link
              to="/services"
              className="link"
              style={{
                color: props.type === "service" ? "#FCCD27" : "white",
                fontWeight: props.type === "service" ? "bold" : "300",

                textDecoration: props.type === "service" ? "underline" : "none",
              }}
            >
              Services
            </Link>

            <Link
              to="/shop"
              className="link"
              style={{
                color: props.type === "shop" ? "#FCCD27" : "white",
                fontWeight: props.type === "shop" ? "bold" : "300",
                textDecoration: props.type === "shop" ? "underline" : "none",
              }}
            >
              Shop
            </Link>
            <Link
              to="/contact-us"
              className="link"
              style={{
                color: props.type === "contact" ? "#FCCD27" : "white",
                fontWeight: props.type === "contact" ? "bold" : "300",

                textDecoration: props.type === "contact" ? "underline" : "none",
              }}
            >
              Contact Us
            </Link>
            <Link
              to="/account"
              className="link"
              style={{
                color: props.type === "panier" ? "#FCCD27" : "white",
                fontWeight: props.type === "panier" ? "bold" : "300",
                marginLeft : windowDimenion.winWidth > 700 ?  "8vw" : "-60vw",
                textDecoration: props.type === "panier" ? "underline" : "none",
              }}
              onClick={drop}
            >
              {connection}
              {/* {auth.isLoggedIn && auth.userName ? "Bonjour, " + auth.userName : "Se Connecter"} */}
            </Link>
            {deconnectDrop? <div className="dropDeconnect" onClick={()=>{updateName(""); auth.logout(); setDeconnectDrop(false); }}> Se déconnecter</div> : <div></div>}
          </div>
        </div>
        
      </nav>
      <img id="menuIcon" onClick={toggle} src="../images/menu.png" alt="" />
    </div>
  );
}
export default NavBar;
