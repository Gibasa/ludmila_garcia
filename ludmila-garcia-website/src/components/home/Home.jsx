import "./Home.css";
import { Link } from "react-router-dom";
import Apresentacao from "../apresentacao/Apresentacao";

function Home() {
  return (
    <div className="home">
      <div className="home-content">
        <div className="home-content-text">
          <h1>
            Liberte - se do que te limita e transforme seus sonhos em realidade.
          </h1>
          <Link
            to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
            target="_blank"
            className="home-btn"
          >
            QUERO REALIZAR MEUS SONHOS
          </Link>
        </div>
      <div className="home-img">
        <img alt="3 fotos" />
      </div>
      </div>
      <Apresentacao />
    </div>
  );
}

export default Home;
