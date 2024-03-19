import "./Apresentacao.css";

function Apresentacao() {
  return (
    <div className="apresentacao">
      <img alt="apresentacao" />
      <div className="apresentacao-text">
        <h2>Olá, sou Ludmila Garcia</h2>
        <p>
          Sou psicóloga desde 2008 pela Universidade Federal da Paraíba
          especialista na área da Terapia Cognitiva Comportamental, em Coaching
          Psicológico pela Universidade de Lisboa e em Mindfulness e Master em
          Programação Neurolinguística pela Universidade Autônoma de Lisboa.
        </p>
        <p>
          Tenho experiência em psicologia clínica com adultos, atendimento
          individual e em grupo, atendimento à criança hospitalizada com câncer
          e familiares, Doenças Crônicas e transtornos alimentares, obesidade,
          tem atuação em psicologia na atenção básica da saúde.
        </p>
        <div className="apresentacao-points">
          <p>
            <span className="apresentacao-point">•</span> Atualmente moro em
            Lucerna na Suíça e atuo 100% Online.
          </p>
          <p>
            <span className="apresentacao-point">•</span> Desenvolvi o Projeto
            “Pense Magro” em 2015 que une técnicas da Terapia Cognitivo
            Comportamental, Nutrição Comportamental e Coaching Psychology para
            auxiliar no emagrecimento sem dietas e nos transtornos alimentares.
          </p>
          <p>
            <span className="apresentacao-point">•</span> Ministro o curso on-line
            Neurociência Emagrecimento da Compulsão Alimentar e Obesidade para
            Psicólogos.
          </p>
          <p>
            <span className="apresentacao-point">•</span> Líder do Grupo de
            Mentoria Psi de Alta Performance.
          </p>
          <p>
            <span className="apresentacao-point">•</span> Ministro palestras e
            supervisão para psicólogos(as).
          </p>
        </div>
      </div>
    </div>
  );
}

export default Apresentacao;
