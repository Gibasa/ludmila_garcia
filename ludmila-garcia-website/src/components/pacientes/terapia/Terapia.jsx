import "./Terapia.css";

function Terapia() {
  return (
    <div className="terapia">
      <div className="terapia-banner">
        <h2>Como funciona o meu modelo de terapia?</h2>
        <img alt="banner-img" />
      </div>
      <div className="terapia-content-top">
        <p>
          Acredito que a terapia online é uma ferramenta poderosa para promover
          mudanças positivas na vida das pessoas, oferecendo flexibilidade,
          acessibilidade e um ambiente seguro e acolhedor para o seu
          desenvolvimento pessoal.
        </p>
        <p>
          Sou psicóloga clínica com vasta experiência em terapia
          cognitivo-comportamental (TCC), uma abordagem terapêutica focada em
          identificar e modificarpensamentos e comportamentos que contribuem
          para o sofrimento emocional. Através de técnicas específicas, você
          aprenderá a lidar com pensamentos distorcidos, gerenciar suas emoções
          e desenvolver habilidades para enfrentar os desafios da vida.
        </p>
      </div>

      <div className="terapia-passos">
        <img src="/images/PASSO 1.png" alt="passo1" />
        <img src="/images/PASSO 2.png" alt="passo2" />
        <img src="/images/PASSO 3.png" alt="passo3" />
      </div>

      <div className="terapia-button">
        <p>QUERO SABER MAIS DETALHES</p>
      </div>
      <div className="terapia-content-bot">
        <div className="terapia-content-bot-1">
          <h2>Benefícios da terapia online:</h2>
          <p>
            <span>Flexibilidade:</span> Você pode agendar e reagendar suas
            sessões de acordo com sua disponibilidade, sem precisar se deslocar
            para um consultório.
          </p>
          <p>
            <span>Acessibilidade:</span> A terapia online é mais acessível do
            que a terapia presencial, pois não há custos com transporte ou
            estacionamento.
          </p>
          <p>
            <span>Conforto:</span> Você pode fazer suas sessões no conforto da
            sua casa, em um ambiente familiar e acolhedor.
          </p>
          <p>
            <span>Eficácia:</span> A terapia online é tão eficaz quanto a
            terapia presencial para diversos transtornos psicológicos.
          </p>
        </div>
        <div className="terapia-content-bot-2">
          <h2>Pode ser útil para pessoas que:</h2>
          <p>
            <span>•</span>Sofrem de ansiedade, depressão, estresse, entre outros
            transtornos psicológicos.
          </p>
          <p>
            <span>•</span>Buscam desenvolver habilidades para lidar com desafios
            da vida pessoal ou profissional.
          </p>
          <p>
            <span>•</span>Desejam melhorar suas relações interpessoais.
          </p>
          <p>
            <span>•</span>Querem ter um melhor autoconhecimento.
          </p>
          <p>
            <span>•</span>Gerir emoções.
          </p>
          <p>
            <span>•</span>Fazer escolhas mais assertivas e alinhadas ao seu
            propósito de vida.
          </p>
          <p>
            <span>•</span>Desenvolver inteligência emocional.
          </p>
        </div>
      </div>
      <div className="terapia-footer">
        <p>
          VALE LEMBRAR: As sessões de terapia online são realizadas
          através de videochamadas em plataformas seguras e confiáveis. Você
          pode ter acesso à terapia de qualquer lugar com acesso a internet, no
          conforto da sua casa ou trabalho.
        </p>
      </div>
      <div className="terapia-button">
        <p>QUERO MARCAR MINHA REUNIÃO</p>
      </div>
    </div>
  );
}

export default Terapia;
