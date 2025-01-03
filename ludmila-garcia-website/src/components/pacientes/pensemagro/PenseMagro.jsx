import "./PenseMagro.css";
import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Link } from "react-router-dom";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./PenseMagro.css";

function PenseMagro() {
  const numeros = Array.from({ length: 8 }, (v, i) => i + 1);
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 599) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 899) {
        setIsMobile(false);
        setIsTablet(true);
      } else {
        setIsMobile(false);
        setIsTablet(false);
      }
    };

    window.addEventListener("resize", handleResize);

    handleResize();

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  });

  return (
    <div className="pense-magro">
      <div className="pense-magro-bg-top">
        <div className="pense-magro-top">
          <h2>Pense Magro</h2>
          <p>
            O Projeto Pense Magro teve início em 2015 e é um protocolo de
            Emagrecimento sem dietas e Transtornos Alimentares que tem base na
            Terapia Cognitiva Comportamental, Neurociência e Meditação com
            Atenção Plena, é um protocolo que foi desenvolvido para clínica pela
            Psicóloga Ludmila Garcia CRP 03/12313, e validado com mais de 8 anos
            de resultados na área. Na época fui diagnosticada com o Transtorno
            de Compulsão Alimentar e hoje o projeto ganhou outra dimensão,
            transformando no meu estilo de vida e já foi aplicado em centenas de
            pessoas.
          </p>
        </div>
        <div className="pense-magro-balls">
          <p>Se você se enquadra nas seguintes carascterísticas:</p>
          <div className="pense-magro-ball">
            <p>Má relação com a comida</p>
          </div>
          <div className="pense-magro-arrow">
            <img alt="seta" />
          </div>
          <div className="pense-magro-ball">
            <p> Efeito sanfona</p>
          </div>
          <div className="pense-magro-arrow">
            <img alt="seta" />
          </div>
          <div className="pense-magro-ball">
            <p>Come por ansiedade</p>
          </div>
          <div className="pense-magro-arrow">
            <img alt="seta" />
          </div>
          <div className="pense-magro-ball">
            <p>Já aderiu a várias dietas</p>
          </div>
        </div>
        <div className="pense-magro-top-end">
          <p>
            Provavelmente você precisa de um olhar mais atento para as suas
            emoções diante da alimentação e bem-estar.
          </p>
        </div>

        <div className="pense-magro-bot">
          <h2>Como funciona o protocolo Pense Magro?</h2>
          <div className="pense-magro-bot-balls">
            <div className="pense-magro-bot-ball">
              <p>16 sessões (1h cada)</p>
            </div>
            <div className="pense-magro-line"></div>
            <div className="pense-magro-bot-ball">
              <p>
                100% <br />
                On-line
              </p>
            </div>
            <div className="pense-magro-line"></div>
            <div className="pense-magro-bot-ball">
              <p>Material Incluído</p>
            </div>
            <div className="pense-magro-line"></div>
            <div className="pense-magro-bot-ball">
              <p>Prevenção de recaídas</p>
            </div>
            <div className="pense-magro-line"></div>
            <div className="pense-magro-bot-ball">
              <p>Processo de alta</p>
            </div>
          </div>
          <p className="pense-magro-bot-paragrafo">
            O tratamento da compulsão alimentar é o caminho para a sua paz
            interior. Liberte-se dos ciclos de culpa e vergonha, reconstrua de
            forma saudável e sustentável sua relação com a comida, conquiste a
            liberdade de ser você mesma todos os dias, acredite em seu potencial
            de transformação e principalmente abrace a sua jornada com amor e
            gentileza.{" "}
          </p>
        </div>
        <div className="pense-magro-depoimentos">
          <div className="pense-magro-bot-end">
            <p>Confira os relatos de quem já mudou vidas com o Pense Magro:</p>
          </div>

          <Swiper
            modules={[Navigation, Autoplay, Pagination]}
            slidesPerView={isMobile ? 1 : isTablet ? 2 : 3}
            navigation={{
              nextEl: ".swiper-custom-next",
              prevEl: ".swiper-custom-prev",
            }}
            pagination={{ clickable: true }}
            autoplay={{ delay: 2000 }}
            loop={true}
          >
            {numeros.map((n) => (
              <SwiperSlide key={n}>
                <img
                  src={`./images/comentario ${n}.png`}
                  alt={`Imagem ${n}`}
                  className="d-block mx-auto"
                />
              </SwiperSlide>
            ))}
            <div
              className={`swiper-custom-next ${
                isMobile || isTablet ? "hidden-swiper-pensemagro" : ""
              }`}
            >
              <img src="./images/SETA AZUL DIREITA.png" alt="Próximo" />
            </div>
            <div
              className={`swiper-custom-prev ${
                isMobile || isTablet ? "hidden-swiper-pensemagro" : ""
              }`}
            >
              <img src="./images/SETA AZUL ESQUERDA.png" alt="Anterior" />
            </div>
          </Swiper>
        </div>
          <Link
        to="https://api.whatsapp.com/send?phone=557192024225&text=Ol%C3%A1,%20vim%20do%20seu%20site"
        target="_blank"
        className="pense-magro-bot-btn"
        >
        <p>DÊ INÍCIO AO SEU PROCESSO DE TRANSFORMAÇÃO</p>
      </Link>
      </div>
    </div>
  );
}

export default PenseMagro;
