import Logo from "../Assets/Images/logo.png";
import Gstore from "../Assets/Images/gstore.png";
import Appstore from "../Assets/Images/apstore.png";
import Insta from "../Assets/Images/insta.png";
import Pinterest from "../Assets/Images/pin.png";
import Facebook from "../Assets/Images/fb.png";
import "../Styles/Footer.css";

const Footer = () => {
  return (
    <footer>
      <div className="section">
        <div className="about">
          <div className="logo">
            <img src={Logo} alt="LAFLIXTV" className="laflix-logo" />
            <h1>LAFLIXTV</h1>
          </div>
          <div className="text">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Amet
            explicabo saepe iste quod sapiente tempore blanditiis sequi
            laudantium, quisquam, vero neque architecto. Molestias culpa fugiat,
            odio ea quidem nemo aspernatur! Maiores, corrupti. Reprehenderit
            veritatis eveniet libero ducimus, ratione consequatur porro.
          </div>
        </div>
        <div className="link">
          <li>About Us</li>
          <li>Blog</li>
          <li>Service</li>
          <li>Career</li>
          <li>Media Center</li>
        </div>
        <div className="social">
          <h2>Download</h2>
          <div className="store">
            <img src={Gstore} alt="gstore" />
            <img src={Appstore} alt="appstore" />
          </div>
          <h2>Social Media</h2>
          <div className="social-media">
            <img src={Insta} alt="instagram" />
            <img src={Pinterest} alt="pinterest" />
            <img src={Facebook} alt="facebook" />
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        Copyright &copy;2021 LAFLIX B-DESIGN .All Rights Reserved
      </div>
    </footer>
  );
};

export default Footer;
