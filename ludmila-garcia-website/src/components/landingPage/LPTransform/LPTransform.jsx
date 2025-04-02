import "./LPTransform.css";

function LPTransform() {
  const bonuses = [
    {
      title: "Aula bônus de precificação",
      description:
        "Aprenda a cobrar de forma estratégica e justa pelo seu trabalho, eliminando inseguranças na hora de definir seus honorários. Você descobrirá como calcular o valor ideal para suas consultas, considerando sua especialização, experiência e mercado, garantindo uma precificação sustentável e lucrativa.",
    },
    {
      title: "Aula bônus de vendas online",
      description:
        "Saiba como posicionar seus serviços no digital e atrair mais pacientes para o seu consultório. Nesta aula, você aprenderá técnicas eficazes para se destacar nas redes sociais, construir autoridade, criar conteúdos relevantes e converter seguidores em clientes, sem precisar de grandes investimentos em anúncios.",
    },
  ];

  return (
    <div className="lp-transform">
      <h2>
        Veja a transformação de alunos que passaram pelo{" "}
        <span className="purple">Protocolo CEO:</span>
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

      <h2>Bônus exclusivos para potencializar sua carreira</h2>
      <p>
        Além do conteúdo completo do Protocolo CEO, você também receberá dois
        bônus exclusivos para impulsionar sua atuação como psicólogo e garantir
        mais segurança financeira.
      </p>
      <ul>
        {bonuses.map((bonus, index) => (
          <li key={index}>
            <strong className="purple">{bonus.title}:</strong>{" "}
            {bonus.description}
          </li>
        ))}
      </ul>
    </div>
  );
}

export default LPTransform;
