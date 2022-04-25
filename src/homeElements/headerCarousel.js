import React from 'react'
import Carousel from "react-bootstrap/Carousel";
import "bootstrap/dist/css/bootstrap.min.css";
import NavBar from "../elements/navBar";

function HeaderCarousel(props) {
  return (
    <div><NavBar type={props.type} />

    <Carousel fade variant="danger">
      <Carousel.Item>
        <img
          src="images/formationRb.jpg"
          className="mainCarousel"
          alt="Fi/rst slide"
        />
        <Carousel.Caption>
          <h3
            className="h3carousel1"
          >
            Join Us In
          </h3>
          <p
            
            className="paragrapheCarousel"
          >
           Maker Skills Up
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/formationMicroDesign.jpg"
          className="mainCarousel"
          alt="Second slide"
        />

        <Carousel.Caption>
          <h3
         className="h3carousel2"
          >
            Learn
          </h3>
          <p
           className="paragrapheCarousel"
          >
            Via hands on workshops
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/formationMaker22.jpg"
          alt="Third slide"
          className="mainCarousel"
        />

        <Carousel.Caption>
          <h3
            className="h3carousel"
          >
            Make
          </h3>
          <p
            className="paragrapheCarousel"
          >
            Your desired products
          </p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          src="images/formationRb.jpg"
          alt="Third slide"
          className="mainCarousel"
        />

        <Carousel.Caption>
          <h3
         
            className="h3carousel"
          >
            Shop
          </h3>
          <p
      className="paragrapheCarousel"
          >
            And buy you missed materials
            </p>
        </Carousel.Caption>
      </Carousel.Item>
      </Carousel></div>
  )
}

export default HeaderCarousel