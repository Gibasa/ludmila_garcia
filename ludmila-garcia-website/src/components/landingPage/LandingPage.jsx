import "./LandingPage.css";
import LPButton from "./LPButton/LPButton";
import LPCards from "./LPCards/LPCards";
import LPTopBanner from "./LPTopBanner/LPTopBanner";
import LPFaixas from "./LPFaixas/LPFaixas";
import LPWhyCeo from "./LPWhyCeo/LPWhyCeo";

function LandingPage() {
  return (
    <div className="landing-page">
      <LPTopBanner />
      <LPButton color="blue">
        INSCREVA-SE AGORA E DÊ O <br />
        PRÓXIMO PASSO NA SUA CARREIRA
      </LPButton>
      <LPCards />
      <LPFaixas />
      <LPWhyCeo />
      <LPButton color="blue">
        GARANTA SUA VAGA E COMECE <br />
        A TRANSFORMAR VIDAS
      </LPButton>
    </div>
  );
}

export default LandingPage;
