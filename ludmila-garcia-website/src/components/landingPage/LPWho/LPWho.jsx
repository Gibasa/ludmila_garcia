import "./LPWho.css";

function LPWho() {
  const targetAudience = [
    "Psicólogos clínicos que desejam se especializar em transtornos alimentares.",
    "Profissionais que buscam uma abordagem estruturada e eficaz.",
    "Terapeutas que querem elevar seus resultados e diferenciar-se no mercado."
  ];

  return (
    <div className="lp-who">
      <div className="lp-who-text">
        <h2>Para Quem <br /> é Este Curso?</h2>
        <ul>
          {targetAudience.map((item, index) => (
            <li key={index}>{item}</li>
          ))}
        </ul>
      </div>
      <img src="/images/LUD Who.jpg" alt="Ludmila Sentada Sorrindo" />
    </div>
  );
}

export default LPWho;
