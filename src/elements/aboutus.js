import "./aboutus.css"
function AboutUs() {
  return (
    <div id="aboutus" className="aboutus">
      <div className="textaboutus">
        <img className="imageaboutus" src="images/whoarewe.png" alt="" />
        <p>
          Be Maker is a Digital makers space to learn new technologies and
          enhance innovation. We believe that the future of learning is evolving
          and alternative learning avenues will be significant in customizing
          people’s learning journeys. We bring interdisciplinary interventions
          across Science, Technology, Engineering, Art, and Math (STEAM) to a
          culture of Innovation, exploration, and lifelong learning. We empower
          people by providing them the confidence, tools, knowledge, space, and
          communities they need to change the world and become
          globally-conscious problem-solvers.
        </p>
      </div>
      <div className="video">
      <video className="videoIn"    controls >
              <source src="videos/motivation.mp4" type="video/mp4" />
                  Your browser does not support the video tag.
         </video>
      </div>
    </div>
  );
}
export default AboutUs;
