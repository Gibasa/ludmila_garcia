import "./Footer.css";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faYoutube, faInstagram } from "@fortawesome/free-brands-svg-icons";

function Footer() {
  const yearnow = () => {
    const date = new Date();
    const currentYear = date.getFullYear();
    console.log(currentYear);
    return currentYear;
  };
  return (
    <div className="footer">
      <div className="footer-text">
        <p>Me conheça um pouco mais nas redes sociais:</p>
      </div>
      <div className="footer-social">
        <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
        <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
      </div>
      <div className="footer-copyright">
        <p>
          Todos os direitos reservados a Ludmila Garcia. Copyright {yearnow()}
        </p>
      </div>
    </div>
  );
}

export default Footer;
