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
        <a
          href="https://www.instagram.com/ludmila.garcia.psi"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faInstagram} className="footer-icon" />
          <p>ludmila.garcia.psi</p>
        </a>
        <a
          href="https://www.youtube.com/@psi.ludmilagarcia"
          target="_blank"
          rel="noopener noreferrer"
        >
          <FontAwesomeIcon icon={faYoutube} className="footer-icon" />
          <p>Ludmila Garcia</p>
        </a>
      </div>
      <div className="footer-contact">
        <p>Avenida Felix Mendonça 401, Itabuna, Bahia, Brasil</p>
        <p>CEP 45605-351 | Tel: +55 71 99202-4225</p>
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
