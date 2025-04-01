import "./LPWhatEnd.css";

function LPWhatEnd() {
  const benefits = [
    "Realizar uma avaliação completa e assertiva dos seus pacientes.",
    "Aplicar técnicas baseadas em neurociência para o tratamento de compulsão alimentar.",
    "Diferenciar fome física de fome emocional e ajudar seus pacientes a fazerem o mesmo.",
    "Implementar estratégias para prevenção de recaídas e manutenção dos resultados.",
    "Posicionar-se como referência no tratamento de transtornos alimentares."
  ];

  return (
    <div className="lp-what-end">
      <h2>Ao Final Desse Curso <br /> Você Vai Conseguir:</h2>
      <ul className="lp-what-end-list">
        {benefits.map((benefit, index) => (
          <li key={index}>{benefit}</li>
        ))}
      </ul>
    </div>
  );
}

export default LPWhatEnd;
