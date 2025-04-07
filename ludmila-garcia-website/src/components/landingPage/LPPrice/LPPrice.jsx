
import "./LPPrice.css";

function LPPrice() {
  const courseDetails = [
    {
      title: "Curso Completo com 14 Módulos",
      content:
        "Conteúdo detalhado para atuar com segurança no tratamento da compulsão alimentar, obesidade e emagrecimento.",
    },
    {
      title: "Videoaulas Gravadas",
      content: "Acesse quando e onde quiser, no seu ritmo.",
    },
    {
      title: "Slides e Resumos das Aulas",
      content:
        "Materiais de apoio para facilitar o aprendizado e a aplicação prática.",
    },
    {
      title: "Modelos de Documentos Clínicos",
      content:
        "Inclui ficha de anamnese específica do Protocolo CEO e outros materiais para otimizar seus atendimentos.",
    },
    {
      title: "Checklist de Avaliação do Paciente",
      content:
        "Guia prático para estruturar suas consultas com segurança e eficácia.",
    },

    {
      title: "Bônus 1 - Aula de Precificação",
      content:
        "Saiba como definir seus honorários de forma justa e estratégica, garantindo uma carreira sustentável e lucrativa.",
    },
    {
      title: "Bônus 2 - Aula de Vendas Online",
      content:
        "Aprenda a divulgar seus serviços no digital e atrair mais pacientes para o seu consultório.",
    },
    {
      title: "Certificado de Conclusão",
      content:
        "Comprovação oficial da sua especialização, aumentando sua credibilidade profissional.",
    },
  ];

  return (
    <div className="lp-price">
      <h2>
        Você está a um passo de{" "}
        <span className="purple"> transformar sua carreira</span> <br className="desktop"/> e elevar seus
        atendimentos <br className="mobile"/>a outro nível!
      </h2>
      <div className="lp-price-container">
        <div className="lp-details">
          <ul>
            {courseDetails.map((detail, index) => (
              <li key={index}>
                <strong className="purple">{detail.title}:</strong>{" "}
                {detail.content}
              </li>
            ))}
          </ul>
        </div>
        <div className="lp-price-price-container">
          <div className="lp-price-price">
            <h3>De: R$ <s>1.997,00</s> </h3>
            <h3>
              {" "}
              Por apenas 12x<br /> de  R$ 103,11 <br/>no cartão
            </h3>
            <h4>ou R$ 997,00 à vista</h4>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LPPrice;
