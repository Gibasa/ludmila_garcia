import "./Marketing.css";
import MarketingCarousel from "./MarketingCarousel";
import { Link } from "react-router-dom";

function Marketing() {
  return (
    <div className="marketing">
      <div className="marketing-top">
        <h2>Conheça a minha mentoria</h2>
        <p>
          A Mentoria Psi de Alta Performance é a minha paixão e o foco dela é o
          SEU RESULTADO. Ela teve início em 2018 e passaram por aqui mais de 500
          profissionais da psicologia! Se eu puder resumir: a MISSÃO é através
          desta Mentoria é realizar sonhos e que você ACREDITE EM VOCÊ sabendo
          que é possível realizar o seu sonho de VIVER DA PSICOLOGIA! Meu
          objetivo é levarmos a Psicologia para mais pessoas e para outro nível,
          juntas conquistarem o mundo!
        </p>
        <p>
          Sou Psicóloga desde 2008 anos e atualmente moro em Lucerna na Suíça, atendo 100%
          on-line e viver da psicologia é minha maior realização e felicidade,
          gostaria de ajudar outros profissionais colegas a sentirem o prazer
          que sinto, pois é inexplicável, só vivendo mesmo. A Mentoria tem duas
          partes, uma individual com encontros baseados no Coaching Psicológico
          e Programação Neurolinguística onde vamos elaborar sua estratégia
          pessoal de posicionamento de carreira e de vida, e outra parte com
          aulas em grupo sobre marketing e posicionamento digital. As aulas são
          ao vivo e a mentoria dura 6 meses, além do diferencial ser EU rs (pego
          mesmo em sua mão e puxo a orelha também), você ganha todos os bônus
          que são todas as aulas de todos os semestres anteriores gravadas que
          estão salvas num grupo secreto do Facebook e onde você pode interagir
          e aprender com outros colegas que estão na busca de realização como
          você.
        </p>

        <div className="marketing-cronograma">
          <h2>Confira a ementa completa da minha mentoria:</h2>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 1</h3>
            <p>- Autoavaliação</p>
            <p>- Mudança de Mindset</p>
            <p>- Escolha do nicho</p>
            <p>- Definição dos sonhos, metas e prazos</p>
            <p>- Desconstrução dos medos e crenças limitantes</p>
          </div>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 2</h3>
            <p>- Aula como se tornar uma líder e ser referência na Psicologia</p>
            <p>
            - O que é alta performance e como se tornar um(a) Psi de Alta
              Performance
            </p>
            <p>
            - Como parar de procrastinar e se tornar referência no nicho que
              deseja
            </p>
          </div>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 3</h3>
            <p>- Inteligência emocional e Marketing na Psicologia</p>
            <p>- Influenciar de forma ética e eficaz</p>
            <p>- Escrita para postagens: Copywriting e Storytelling</p>
          </div>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 4</h3>
            <p>- Mentalidade de Sucesso</p>
            <p>- Modelando o comportamento</p>
            <p>- Como aumentar seus rendimentos</p>
            <p>- Técnicas de Vendas</p>
            <p>
            - Torne-se a sua marca, conecte-se com seu propósito, alinhe seus
              valores e aumente seu valor para cobrar mais
            </p>
          </div>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 5</h3>
            <p>
            - Como construir uma identidade digital a partir da sua
              personalidade e valores
            </p>
            <p>- Como fazer parcerias</p>
            <p>- O que atrai o cliente certo</p>
            <p>- Como e o que falar, como escolher temas e como abordá-los </p>
            <p>- Como perder o medo de gravar vídeos, stories e lives</p>
          </div>
          <div className="marketing-cronograma-modulo">
            <h3>Módulo 6</h3>
            <p>- Autoavaliação do desempenho e feedback</p>
            <p>- Refazer metas e direcionamento para os seus próximos passos</p>
            <p>- Gestão de Carreira e de vida</p>
          </div>
        </div>
      </div>
      <MarketingCarousel />
      <div className="marketing-bot">
        <h2>E ainda tenho mais para você:</h2>
        <div className="marketing-bot-box">
          <p>
            <strong>- Metodologia: </strong>
            <br />
            Todas as aulas são inéditas e adaptas ao perfil de cada grupo. O
            encontros por cinco meses, 6 em grupo, 12 individuais, somando 18 no
            total *Caso sejam necessários mais encontros individuais estarão
            inclusos no pacote, sem custo adicional.
          </p>
          <p>
            <strong>- Mais bônus:</strong> <br />
            Aulas com especialistas de diversas áreas como Marketing Digital,
            Coach de Empreendedor Digital, Design Gráfico e mais...
          </p>
          <p>
            <strong>- Ser membro do Grupo Secreto no Facebook para envio de materiais e
            trocas.</strong>
          </p>
          <p>
            <strong>- Acesso aos conteúdos anteriores, inclusive as aulas gravadas com
            mais de 60h Assessoria e Consultoria individual de vida e carreira.</strong>
          </p>
          <p>
            <strong>- Contato e acolhimento via whatsapp direto com a Mentora 7 dias por
            semana.</strong>
          </p>
        </div>
        <Link
          to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
          target="_blank"
          className="marketing-btn"
        >
          <p>QUERO TER ALTA PERFORMANCE</p>
        </Link>
      </div>
      <div className="marketing-bot-logo">
        <img alt="logo black" />
        <h2>
          Seja uma profissional que faz a diferença e viva o melhor da
          psicologia!
        </h2>
      </div>
      <div className="marketing-bot-fotos">
        <img src="./images/FOTO 1.png" alt="foto 1" />
        <img src="./images/FOTO 2.png" alt="foto 2" />
        <img src="./images/FOTO 3.png" alt="foto 3" />
        <div className="marketing-bot-fotos-banner">
          <p>Hoje vivo da psicologia pelo mundo e atendendo 100% on-line.</p>
        </div>
      </div>
        <div className="marketing-over-btn"><p>Atinja sua liberdade financeira, de tempo e geográfica e colecione momentos memoráveis através da psicologia.</p></div>
      <Link
        to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
        target="_blank"
        className="marketing-bot-btn"
      >
        <p>QUERO TER SUCESSO COMO PSICÓLOGA(O)</p>
      </Link>
    </div>
  );
}

export default Marketing;
