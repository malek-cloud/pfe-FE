import React, { Component } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "../styles/stomach.css";
import CardServices from "./cardServices";

function Arrow(props) {
  let className = props.type === "next" ? "nextArrow" : "prevArrow";
  className += " arrow";
  const char = props.type === "next" ? "👉" : "👈";
  return (
    <span className={className} onClick={props.onClick}>
      {char}
    </span>
  );
}
export default class CarouselServices extends Component {
  render() {
      var settings = {
            dots: false,
            infinite: true,
            speed: 1500,
            pauseOnHover: true,
            autoplay: true,
            autoplaySpeed: 100,
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
             <div className="carouselTitle">What We Do</div>


         <div className="container1">
         <Slider nextArrow={<Arrow type="next" />}
        prevArrow={<Arrow type="prev" />} {...settings}>
         <CardServices
          title={"Workshops"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          image={"./images/formationMakerCV.jpg"}
        />
        <CardServices
          title={"Bootcamps"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          image={"./images/formationMicroDesign.jpg"}
        />
        <CardServices
          title={"3D Printing"}
          description={
            "Some quick example text to build on the card title and make up the bulk of the card's content."
          }
          image={"./images/act3DMaker.jpg"}
        /><CardServices
        title={"Workshops"}
        description={
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        image={"./images/formationMakerCV.jpg"}
      />
      <CardServices
        title={"Bootcamps"}
        description={
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        image={"./images/formationMicroDesign.jpg"}
      />
      <CardServices
        title={"3D Printing"}
        description={
          "Some quick example text to build on the card title and make up the bulk of the card's content."
        }
        image={"./images/act3DMaker.jpg"}
      /><CardServices
      title={"Workshops"}
      description={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      image={"./images/formationMakerCV.jpg"}
    />
    <CardServices
      title={"Bootcamps"}
      description={
        "Some quick example text to build on the card title and make up the bulk of the card's content."
      }
      image={"./images/formationMicroDesign.jpg"}
    />
    <CardServices
      title={"3D Printing"}
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