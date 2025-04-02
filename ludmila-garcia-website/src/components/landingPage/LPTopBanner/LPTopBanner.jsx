import LPButton from "../LPButton/LPButton";
import "./LPTopBanner.css";

function LPTopBanner() {
  return (
    <div className="lp-top-banner">
      <div className="lp-img-container">
        <img src="/images/PÁGINA LUD GARCIA.png" alt="asa roxa" />
      </div>
      <div className="lp-top-text">
        <h2>
          Transforme sua carreira na psicologia com o{" "}
          <div className="purple">
            Protocolo CEO de compulsão alimentar, emagrecimento e obesidade.
          </div>
        </h2>
        <p>
          Aprenda a tratar compulsão alimentar, emagrecimento e obesidade com
          segurança, embasamento científico <br />e técnicas eficazes.
        </p>
        <LPButton color="blue">
          COMECE A TRANSFORMAR VIDAS!
        </LPButton>
      </div>
    </div>
  );
}

export default LPTopBanner;
