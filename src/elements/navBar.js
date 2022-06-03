import "../styles/header.css";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  useLogoutFunction,
  useDeconnectionState,
  useDataContext,
} from "../context/loginContext";
import { useName, useNameUpdate } from "../context/fcbGgle";
function NavBar(props) {
  const name = useName();
  const updateName = useNameUpdate();
  const logout = useLogoutFunction();
  const deconnect = useDeconnectionState();
  function toggle() {
    document.getElementsByClassName("links")[0].classList.toggle("active");
    document.getElementsByClassName("link")[0].classList.toggle("active");
    document.getElementsByClassName("link")[1].classList.toggle("active");
    document.getElementsByClassName("link")[2].classList.toggle("active");
    document.getElementsByClassName("link")[4].classList.toggle("active");
    document.getElementsByClassName("link")[3].classList.toggle("active");
    document.getElementsByClassName("ground")[0].classList.toggle("active");
  }

  const dataconnect = useDataContext();

  const [windowDimenion, detectHW] = useState({
    winWidth: window.innerWidth,
    winHeight: window.innerHeight,
  });
  const [deconnectDrop, setDeconnectDrop] = useState(false);
  const [connectName, setName] = useState(false);
  const drop = () => {
    if (connectName !== "Sign In") {
      setDeconnectDrop(!deconnectDrop);
    }
  };
  const detectSize = () => {
    detectHW({
      winWidth: window.innerWidth,
      winHeight: window.innerHeight,
    });
  };

  useEffect(() => {
    if (
      JSON.parse(localStorage.getItem("userData")) ||
      !deconnect
    ) {
      console.log("ye5i d5alnna?")
      setName(
        "Hello, " + JSON.parse(localStorage.getItem("userData")).client.prenom
      );
    } else if (name) {
      setName("Hello, " + name.split(/[, ]+/)[0]);
    } else if((deconnect || !JSON.parse(localStorage.getItem("userData"))) && !name ) {
      setName("Sign In");
    }
/*     console.log(
      JSON.parse(localStorage.getItem("userData")).client.prenom +
        " hedha el ^prenom mel local storagr" +
        !deconnect
    ); */
    /* if(name!=="" && !auth.isLoggedIn){
      setConnection( "Hello " + name.split(/[, ]+/)[0])
    }else if(auth.isLoggedIn && auth.userName ){
      setConnection("Hello "+ auth.userName)
    }else if(name==="" ){
      setConnection("Sign In")
    } */
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
                marginLeft: windowDimenion.winWidth > 700 ? "8vw" : "-60vw",
                textDecoration: props.type === "panier" ? "underline" : "none",
              }}
              onClick={drop}
            >
              {/*  {JSON.parse(localStorage.getItem("userData")) &&
              JSON.parse(localStorage.getItem("userData")).client.prenom && !deconnect
                ? "Hello, " +
                  JSON.parse(localStorage.getItem("userData")).client.prenom
                : "Sign In"} */}
              {connectName}
            </Link>
            {deconnectDrop && connectName !== "Sign In" ? (
              <div
                className="dropDeconnect"
                onClick={() => {
                  updateName("");
                  logout();
                  setDeconnectDrop(false);
                }}
              >
                Se déconnecter
              </div>
            ) : (
              <div></div>
            )}
          </div>
        </div>
      </nav>
      <img id="menuIcon" onClick={toggle} src="../images/menu.png" alt="" />
    </div>
  );
}
export default NavBar;
