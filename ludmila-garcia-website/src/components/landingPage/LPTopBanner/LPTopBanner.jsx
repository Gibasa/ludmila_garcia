import LPButton from "../LPButton/LPButton";
import "./LPTopBanner.css";

function LPTopBanner() {
  return (
    <div className="lp-top-banner">
      <div className="lp-img-container">
        <img src="/images/lp-lud-banner-top.png" alt="asa roxa" />
      </div>
      <div className="lp-top-text">
        <h2>
        Destaque-se na psicologia com o{" "}
          <span className="purple">Protocolo CEO</span> focado em compulsão alimentar, emagrecimento e obesidade.
        </h2>
        <p>
          Aprenda a tratar compulsão alimentar, emagrecimento e obesidade com
          segurança, embasamento científico <br />e técnicas eficazes.
        </p>
        <LPButton color="blue">COMECE A TRANSFORMAR VIDAS!</LPButton>
      </div>
    </div>
  );
}

export default LPTopBanner;
