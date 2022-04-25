import "./video.css";
import { useRef, useEffect } from "react";

function Services() {
  const texts = useRef("gfhjf");
  useEffect(() => {
    const textRef = texts.current.children;
    let index = 0;
    const textInTimer = 10000,
      textOutTimer = 20000;

    function animateText() {
      for (let i = 0; i < textRef.length; i++) {
        textRef[i].classList.remove("text-in", "text-out");
      }
      textRef[index].classList.add("text-in");

      setTimeout(function () {
        textRef[index].classList.add("text-out");
      }, textOutTimer);

      setTimeout(function () {
        if (index === textRef.length - 1) {
          index = 0;
        } else {
          index++;
        }
        animateText();
      }, textInTimer);
    }
    window.onload = animateText();
  }, [texts]);

  return (
    <div>
      {/* <video loop autoPlay="true" muted id="myVideo">
        <source src={myVideo} type="video/mp4"></source>
      </video>*/}
      <iframe   id="myVideo"  src="https://www.youtube.com/embed/6lCIx33Uaz0?autoplay=1&mute=1&loop=1&playlist=6lCIx33Uaz0" ></iframe>

      {/*   <div classNameName="content">
        <div className="wrapper">
          <div className="static-txt">We Have</div>
          <ul className="dynamic-txts">
            <li>
              <span>First : 3D Printing</span>
            </li>
            <li>
              <span>Second : Laser Cutting</span>
            </li>
            <li>
              <span>Third : PCB Fabrication</span>
            </li>
            <li>
              <span>Fourth : CNC Routing</span>
            </li>
          </ul>
        </div>
  </div>*/}

      <section className="content">
        <div className="container">
          <div className="row">
            <div className="content-text">
              
              <p ref={texts} className="animate-text">
                <span>Impression 3D</span>
                <span>Découpe Laser</span>
                <span>Fabrication PCB</span>

                <span>Routage CNC</span>
              </p>
            </div>
          </div>
        </div>
       <a href="#newServicesContainer">
         <h5 className="moredetails">Plus De Détails</h5>
         <img className="arrowdetail" src="/images/arrowdowndetail.png" alt="" />
       </a>
      </section>
    </div>
  );
}
export default Services;
