import "./LPTransform.css";

function LPTransform() {
  const bonuses = [
    "Aula Bônus de Precificação: Saiba como cobrar de forma justa e estratégica.",
    "Aula Bônus de Vendas Online: Aumente sua presença digital e conquiste mais pacientes."
  ];

  return (
    <div className="lp-transform">
      <h2>
        Veja a transformação de alunos que passaram pelo{" "}
        <span className="purple">Protocolo CEO</span>
      </h2>
      
      <div className="lp-transform-card">
        <div className="star">*****</div>
        <h3>Mariana Freitas</h3>
        <p>32 anos, São Paulo, São Paulo</p>
        <p>
          Após concluir o Protocolo CEO, meus atendimentos se tornaram muito
          mais estruturados e eficazes. Os materiais e o suporte da equipe da
          Ludmila Garcia são incríveis. Hoje, tenho mais segurança para
          acompanhar meus pacientes e ver resultados reais.
        </p>
      </div>
      
      <h2>Bônus Exclusivos</h2>
      <ul>
        {bonuses.map((bonus, index) => (
          <li key={index}>{bonus}</li>
        ))}
      </ul>
    </div>
  );
}

export default LPTransform;
