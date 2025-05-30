import "./Compulsao.css";
import { Link } from "react-router-dom";

function Compulsao() {
  return (
    <div className="compulsao">
      <div className="compulsao-top">
        <h2>Neurociência da Compulsão Alimentar e Obesidade</h2>
        <p>
          Com 1 bilhão de pessoas obesas no mundo e aumento dos transtorno
          alimentares, te convido a conhecer o protocolo completo para
          psicólogas(os) de avaliação e tratamento da compulsão alimentar e
          obesidade, com técnicas da Terapia Cognitiva Comportamental, Coaching
          Psicológico, Neurociência e Mindfulness. Possui 12 sessões
          semi-estruturadas descritas nas vídeo aulas nos 10 módulos e com
          materiais de apoio para aplicação do protocolo para anamnese e
          tratamento, inclusive serve de apoio ao laudo e acompanhamento pré e
          pós cirurgia bariátrica e mais um módulo extra sobre o tratamento
          voltado para a Compulsão Alimentar a partir da Terapia Comportamental
          Dialética e Neurociência.
        </p>
        <p>
          Os módulos estão organizados para que você em pouco tempo aprenda o
          manejo clínico para atuar na área, e os módulos tem técnicas práticas,
          atuais e validadas recomendadas para o tratamento da Compulsão
          Alimentar e Obesidade, e os temas envolvem Diferenciar fome física da
          emocional, saciedade x satisfação, prevenção de recaídas, mudança no
          estilo de vida a partir de comportamentos mais assertivos e escolhas
          mais conscientes e saudáveis, o que facilita o processo e o protocolo
          inclui manutenção dos resultados, até o processo de alta.
        </p>
        <p>
          Método desenvolvido e validado pela Psicóloga e Mentora de Psis
          Ludmila Garcia há mais de 8 anos, este curso já transformou a vida de
          mais de 500 psicólogas e ajudou profissionais a empreenderem e viverem
          da psicologia.{" "}
        </p>
        <p>
          Receba todo material pronto para aplicar e aulas bônus para aprender a
          ter um diferencial na psicologia, se posicionar no digital, saber como
          divulgar e se tornar referência numa área super rentável e promissora,
          e que além do mais é super prazerosa de atuar.{" "}
        </p>
        <p>
          Esse curso pode ser o caminho para sua liberdade de tempo, geográfica,
          financeira e emocional, venha fazer parte desse movimento que
          transforma vidas.
        </p>
        <p>
          Como bônus você Psi irá receber aulas sobre como se posicionar nas
          redes sociais, trabalhar sua autoestima e autoconfiança divulgar o
          protocolo para ter o retorno do seu investimento o mais rápido
          possível, o que você obtém a partir do primeiro cliente.
        </p>
      </div>
      <div className="compulsao-bot">
        <img alt="background image" />
        <h2>
          Alcance sua liberdade e revolucione seus resultados terapêuticos!
        </h2>
        <p>
          São 12 aulas focadas em desvendar os mecanismos neurais por trás da
          compulsão alimentar e da obesidade.
        </p>
        <Link
            to="https://go.hotmart.com/A96139945D"
            target="_blank" className="compulsao-bot-btn link-hover">
          <p>INVISTA EM SUA CARREIRA E FAÇA A DIFERENÇA NA VIDA DE SEUS PACIENTES</p>
       </Link>
      </div>
    </div>
  );
}

export default Compulsao;
