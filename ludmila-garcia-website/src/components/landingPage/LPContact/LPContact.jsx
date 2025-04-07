import "./LPContact.css";
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faWhatsapp } from '@fortawesome/free-brands-svg-icons';

function LPContact() {
  const phoneNumber = "+557192024225"; 
  const message = "Olá, tenho dúvidas sobre o Protocolo CEO!";

  const whatsappLink = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`;

  return (
    <div className="lp-contact-card">
      <h3 className="lp-contact-title">Ainda com dúvidas?</h3>
      <p className="lp-contact-text">
        Fale diretamente comigo pelo WhatsApp.<br/> Estou aqui para te ajudar!
      </p>
      <a 
        href={whatsappLink} 
        target="_blank" 
        rel="noopener noreferrer"
        className="lp-whatsapp-button"
      >
        <FontAwesomeIcon icon={faWhatsapp} className="whatsapp-icon" />
        Fale no WhatsApp
      </a>
    </div>
  );
}

export default LPContact;