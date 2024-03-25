import "./Contato.css";
import { Link } from "react-router-dom";

function Contato() {
  return (
    <div className="contato">
      <div className="contato-text">
        <h2>Ainda tem dúvidas sobre como eu posso te ajudar?</h2>
        <Link
            to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
            target="_blank" className="contato-btn">CONVERSE COMIGO AGORA</Link>
      </div>
      <div className="contato-fotos">
        <img src="./images/foto contato.png" alt="contato 1" />
      </div>
    </div>
  );
}

export default Contato;
