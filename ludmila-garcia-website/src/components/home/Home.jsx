import "./Home.css";
import { Link } from "react-router-dom";
import Apresentacao from "../apresentacao/Apresentacao";
import { useState, useEffect } from "react";

function Home() {
  const [isMobile, setIsMobile] = useState(false);
  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 990) {
        setIsMobile(true);
      }
    };
    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);
  return (
    <div className={`home ${isMobile ? 'home-mobile-bg' : 'home-desktop-bg'}`}>
      <div className="home-content">                  
          <Link
            to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
            target="_blank"
            className="home-btn"
          >
            QUERO REALIZAR MEUS SONHOS
          </Link>        
        <div className="home-img">
          <img alt="3 fotos" />
        </div>
      </div>
      <Apresentacao />
    </div>
  );
}

export default Home;
