import "./LPTransform.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/pagination";
import { Pagination, Navigation, Autoplay } from "swiper/modules";

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
    {
      title: "Encontro individual com a Ludmila Garcia",
      description:
        "Tire suas dúvidas e trace estratégias personalizadas para avançar com segurança.",
    },
    {
      title: "Comunidade Exclusiva",
      description:
        "Acesse o grupo oficial do Protocolo CEO e conecte-se com outros profissionais que estão na mesma jornada.",
    },
  ];

  const testimonials = [
    {
      name: "Camila Andrade",
      age: "29 anos",
      location: "Curitiba, Paraná",
      testimonial:
        "O Protocolo CEO foi um divisor de águas na minha atuação clínica. Aprendi a conduzir casos de compulsão alimentar com muito mais embasamento e clareza. O suporte da equipe também fez toda a diferença.",
    },
    {
      name: "Beatriz Lima",
      age: "33 anos",
      location: "Salvador, Bahia",
      testimonial:
        "O curso superou todas as minhas expectativas. A abordagem prática e científica me proporcionou uma transformação real na forma como atendo meus pacientes com sobrepeso e compulsão.",
    },
    {
      name: "Joana Silveira",
      age: "40 anos",
      location: "Belo Horizonte, Minas Gerais",
      testimonial:
        "Já fiz diversos cursos na área, mas nenhum tão completo e aplicável como o Protocolo CEO. A clareza das aulas e os materiais fornecidos são excelentes. Estou colhendo os frutos no meu consultório.",
    },
    {
      name: "Fernanda Rocha",
      age: "27 anos",
      location: "Florianópolis, Santa Catarina",
      testimonial:
        "Me inscrevi sem muitas expectativas, mas fui surpreendida com a qualidade do conteúdo. Já comecei a aplicar as estratégias e meus pacientes relatam mudanças significativas.",
    },
    {
      name: "Carla Souza",
      age: "35 anos",
      location: "Goiânia, Goiás",
      testimonial:
        "O módulo sobre fome emocional foi um dos pontos altos do curso para mim. Hoje consigo ajudar meus pacientes de forma muito mais assertiva e empática. Recomendo de olhos fechados!",
    },
    {
      name: "Luciana Ribeiro",
      age: "31 anos",
      location: "Recife, Pernambuco",
      testimonial:
        "O Protocolo CEO me trouxe uma nova visão sobre emagrecimento e saúde mental. Estou muito mais preparada para lidar com questões complexas no consultório.",
    },
    {
      name: "Patrícia Nunes",
      age: "38 anos",
      location: "Porto Alegre, Rio Grande do Sul",
      testimonial:
        "A estrutura do curso é perfeita para quem já atua na clínica e quer se aprofundar. Os materiais são ricos, atualizados e aplicáveis. A Ludmila Garcia realmente sabe o que faz.",
    },
    {
      name: "Renata Carvalho",
      age: "30 anos",
      location: "Campinas, São Paulo",
      testimonial:
        "Desde que concluí o curso, minha prática clínica se transformou. Consegui organizar melhor meus atendimentos e tenho visto resultados concretos com meus pacientes. Gratidão à equipe!",
    },
    {
      name: "Aline Martins",
      age: "32 anos",
      location: "São Luís, Maranhão",
      testimonial:
        "O Protocolo CEO me trouxe não só mais conhecimento técnico, mas também segurança para lidar com casos desafiadores. É um curso essencial para qualquer profissional da nutrição clínica.",
    },
    {
      name: "Tatiane Oliveira",
      age: "37 anos",
      location: "João Pessoa, Paraíba",
      testimonial:
        "Fiquei impressionada com a profundidade do conteúdo. Cada módulo me fez repensar minha prática e aplicar mudanças imediatas. Me sinto muito mais preparada e confiante no consultório.",
    },
  ];

  return (
    <div className="lp-transform">
      <h2>
        Veja a transformação de alunos que <br className="tablet"/> <br className="desktop"/>passaram pelo{" "}
        Protocolo CEO:
      </h2>

      <div className="lp-transform-slider">
        <Swiper
          modules={[Pagination, Navigation, Autoplay]}
          spaceBetween={20}
          slidesPerView={1}
          navigation={true}
          loop={true}
          autoplay={{
            delay: 5000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index}>
              <div className="lp-transform-slide">
                <div className="purple star">★★★★★</div>
                <h3>{t.name}</h3>
                <p>
                  {t.age}, {t.location}
                </p>
                <p>{t.testimonial}</p>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="lp-transform-text">
        <h2>Bônus exclusivos para <br className="tablet"/> <br className="mobile"/>potencializar sua carreira</h2>
        <p className="lp-transform-text-p">
          Além do conteúdo completo do Protocolo CEO, você também receberá dois
          bônus exclusivos para impulsionar sua atuação como psicólogo e
          garantir <br className="tablet"/> mais segurança financeira.
        </p>
      </div>
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
