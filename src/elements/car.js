import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import CardField from "./cardField";
import "../styles/stomach.css";

export default class Car extends Component {
  render() {
      var settings = {
            dots: true,
            infinite: false,
            speed: 1000,
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 1500,
            slidesToShow: 4,
            slidesToScroll: 1,
            initialSlide: 0,
            arrows:true,
            appendDots: dots => (
                  <div
                    style={{
                      borderRadius: "10px",
                      padding: "10px"
                    }}
                  >
                    <ul style={{ margin: "0px" }}> {dots} </ul>
                  </div>
                ),
               
            responsive: [
              {
                breakpoint: 1024,
                settings: {
                  slidesToShow: 3,
                  slidesToScroll: 9,
                  infinite: true,
                  dots: true
                }
              },
              {
                breakpoint: 600,
                settings: {
                  slidesToShow: 2,
                  slidesToScroll: 2,
                  initialSlide: 2
                }
              },
              {
                breakpoint: 480,
                settings: {
                  slidesToShow: 1,
                  slidesToScroll: 1
                }
              }
            ]
          };
    return (
      <div>
        <div className="carouselTitle">Our Fields</div>

         <div className="container2">
         <Slider {...settings}>
          <CardField
            title={"Electronics"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMakerCV.jpg"}
          />
          <CardField
            title={"Artificial intelligence"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMaker2.jpg"}
          />
          <CardField
            title={"IOT"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/act3DMaker.jpg"}
          />
          <CardField
            title={"Electronics"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMakerCV.jpg"}
          />
          <CardField
            title={"Artificial intelligence"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMaker2.jpg"}
          />
          <CardField
            title={"IOT"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/act3DMaker.jpg"}
          />
          <CardField
            title={"Electronics"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMakerCV.jpg"}
          />
          <CardField
            title={"Artificial intelligence"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/formationMaker2.jpg"}
          />
          <CardField
            title={"IOT"}
            description={
              "Some quick example text to build on the card title and make up the bulk of the card's content."
            }
            image={"./images/act3DMaker.jpg"}
          />
        </Slider>
         </div>
        </div>
      
    );
  }
}
