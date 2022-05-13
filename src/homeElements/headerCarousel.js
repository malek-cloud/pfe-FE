import React, { useState, useEffect } from "react";
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../elements/navBar";

function HeaderCarousel(props) {
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
      <NavBar type={props.type} />
      <div className="arrowImageSliding">
        <Carousel fade variant="danger">
          <Carousel.Item>
            <img
              src={
                windowDimenion.winWidth > 700
                  ? "images/join.jpg"
                  : "images/joinMob.jpg"
              }
              className="mainCarousel"
              alt="Fi/rst slide"
            />
            <Carousel.Caption>
              <h3 className="h3carousel">Join Us</h3>
              <p className="paragrapheCarousel">Maker Skills Up</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={
                windowDimenion.winWidth > 700
                  ? "images/learn.jpg"
                  : "images/learnmob.jpg"
              }
              className="mainCarousel"
              alt="Second slide"
            />

            <Carousel.Caption>
              <h3 className="h3carousel">Learn</h3>
              <p className="paragrapheCarousel">Via hands on workshops</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <img
              src={
                windowDimenion.winWidth > 700
                  ? "images/make.jpg"
                  : "images/droneMobile.jpg"
              }
              alt="Third slide"
              className="mainCarousel"
            />

            <Carousel.Caption>
              <h3 className="h3carousel">Make</h3>
              <p className="paragrapheCarousel">Your Ideas happen</p>
            </Carousel.Caption>
          </Carousel.Item>
          <Carousel.Item>
            <div>
              <img
                src={
                  windowDimenion.winWidth > 700
                    ? "images/innovate.png"
                    : "images/innovatemob.png"
                }
                className="mainCarousel"
                alt="Fi/rst slide"
              />
              <div className="rightArrowSliding"></div>
            </div>
            <Carousel.Caption>
              <h3 className="h3carousel">Innovate</h3>
              <p className="paragrapheCarousel">By creating awesome things</p>
            </Carousel.Caption>
          </Carousel.Item>
        </Carousel>
      </div>
    </div>
  );
}

export default HeaderCarousel;
