import "../styles/header.css";
import { useState, useEffect } from "react"
import { Link } from "react-router-dom";
import {useContext} from 'react'
import {AuthContext} from '../context/loginContext'
function NavBar(props) {
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

  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    window.addEventListener("resize", detectSize);
    console.log(windowDimenion.winWidth);
    return () => {
      window.removeEventListener("resize", detectSize);
    };
  }, [windowDimenion]);
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
            >
              {auth.isLoggedIn && auth.userName ? "Bonjour, " + auth.userName : "Se Connecter"}
            </Link>
          </div>
        </div>
        
      </nav>
      <img id="menuIcon" onClick={toggle} src="../images/menu.png" alt="" />
    </div>
  );
}
export default NavBar;
