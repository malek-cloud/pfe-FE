import "./footer.css";
function Footer() {
  return (
    <div className="footer-dark">
      <footer>
        <div className="container">
          <div className="row footerrow">
            <div className="col-sm-3 col-md-3 item inline">
              <h3 style={{color:"#f1f1f1", marginLeft:"-20px"}}>Services</h3>
              <ul>
                <li>
                  <a href="/">Web Development</a>
                </li>
                <li>
                  <a href="/">Embedded Systems</a>
                </li>
                <li>
                  <a href="/">Workshops</a>
                </li>
                <li>
                  <a href="/">Laser Cutting</a>
                </li>
                <li>
                  <a href="/">3D printing</a>
                </li>
              </ul>
            </div>
            <div className="col-sm-3 col-md-3 item inline">
              <h3>About</h3>
              <ul>
                <li>
                  <a href="/">Company</a>
                </li>
                <li>
                  <a href="/">Team</a>
                </li>
                <li>
                  <a href="/">Partners</a>
                </li>
              </ul>
            </div>
            <div className="col-md-6 item item  inline">
              <h3>Be Maker</h3>
              <p>
                Digital makers space to learn new technologies and enhance
                innovation.We empower people by providing them the confidence,
                tools, knowledge, space, and communities they need to change the
                world and become globally-conscious problem-solvers.
              </p>
            </div>
          </div>
          <div className="col item social ">
            <a href="/">
              <i className="icon ion-social-facebook " style={{marginLeft : "0vw"}}></i>
            </a>
            <a href="/">
              <i className="icon ion-social-twitter" style={{marginLeft : "0vw"}}></i>
            </a>
            <a href="/">
              <i className="icon ion-social-linkedin" style={{marginLeft : "0vw"}}></i>
            </a>
            <a href="/">
              <i className="icon ion-social-instagram" style={{marginLeft : "0vw"}}></i>
            </a>
          </div>
          <p className="copyright">Be Maker © 2022 All Rights Reserved</p>
        </div>
      </footer>
    </div>
  );
}
export default Footer;
