import "./LandingPage.css";
import LPButton from "./LPButton/LPButton";
import LPCards from "./LPCards/LPCards";
import LPTopBanner from "./LPTopBanner/LPTopBanner";
import LPFaixas from "./LPFaixas/LPFaixas";
import LPWhyCeo from "./LPWhyCeo/LPWhyCeo";
import LPWhatLearn from "./LPWhatLearn/LPWhatLearn";
import LPWhatEnd from "./LPWhatEnd/LPWhatEnd";
import LPWho from "./LPWho/LPWho";
import LPTransform from "./LPTransform/LPTransform";
import LPPrice from "./LPPrice/LPPrice";
import LPProfile from "./LPProfile/LPProfile";
import LPFaq from "./LPFaq/LPFaq";
import LPVideo from "./LPVideo/LPVideo";
import LPContact from "./LPContact/LPContact";
import LPTestimonialVideo from "./LPTestimonialVideo/LPTestimonialVideo";

function LandingPage() {
  return (
    <div className="landing-page">
      <LPTopBanner />
      <LPVideo />
      <LPCards />
      <LPFaixas />
      <LPWhyCeo />
      <LPTestimonialVideo/>
      <LPButton color="blue">DÊ O PRÓXIMO PASSO NA SUA CARREIRA</LPButton>
      <LPWhatLearn />
      <LPButton color="blue">
        FAÇA SUA INSCRIÇÃO E TENHA ACESSO IMEDIATO
      </LPButton>
      <LPWhatEnd />
      <LPButton color="blue">COMECE AGORA E ELEVE SUA PRÁTICA CLÍNICA</LPButton>
      <LPWho />
      <LPTransform />
      <LPButton color="blue">
        GARANTA SEUS BÔNUS EXCLUSIVOS <br />
        AO SE INSCREVER AGORA
      </LPButton>
      <LPPrice />
      <LPButton color="blue">QUERO ME INSCREVER COM DESCONTO </LPButton>
      <LPProfile />
      <LPContact />
      <LPFaq />
    </div>
  );
}

export default LandingPage;
