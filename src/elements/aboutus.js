import "./aboutus.css";
function AboutUs() {
  return (
    <div id="aboutus" className="aboutus">
      <div className="textaboutus">
        <img className="imageaboutus" src="images/whoarewe.png" alt="" />
        <p>
          Maker Skills Up is a school of innovation that helps in learning new
          technologies and enhancing invention. We believe that the future of
          learning is evolving and alternative learning avenues will be
          significant in customizing people’s learning journeys. We bring
          interdisciplinary interventions across Science, Technology,
          Engineering, Art, and Math (STEAM) to foster a culture of Innovation,
          exploration, and lifelong learning. We empower people by providing
          them the confidence, tools, knowledge, space, and communities they
          need to change the world and become globally-conscious
          problem-solvers.
        </p>
      </div>
      <div className="video">
        {/* <video className="videoIn"    controls >
              <source src="videos/motivation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
         </video> */}
        <img src="/images/makerlogo.jpg" alt="maker skills up" className="videoIn" />
      </div>
    
    </div>
  );
}
export default AboutUs;
