import "./LPWhatLearn.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modulesData = [
  { title: "Módulo 1:", content: "Introdução ao Curso CEO" },
  { title: "Módulo 2:", content: "Aula Bônus: Compulsão Alimentar" },
  { title: "Módulo 3:", content: "Aula Bônus: Precificação" },
  { title: "Módulo 4:", content: "Aula Bônus: Como Vender na Internet" },
  { title: "Módulo 5:", content: "Anamnese Protocolo CEO" },
  { title: "Módulo 6:", content: "Comer com Atenção Plena" },
  { title: "Módulo 7:", content: "Fome Física x Fome Emocional" },
  { title: "Módulo 8:", content: "Saciedade x Satisfação" },
  { title: "Módulo 9:", content: "Acompanhamento de Progresso" },
  { title: "Módulo 10:", content: "Estratégias Cognitivas Comportamentais" },
  {
    title: "Módulo 11:",
    content: "Preparação para Alta e Resolução de Problemas",
  },
  {
    title: "Módulo 12:",
    content: "Prevenção de Recaídas e Revisão do Tratamento",
  },
  {
    title: "Módulo 13:",
    content: "Revisão do Tratamento e Manutenção dos Resultados",
  },
  { title: "Módulo 14:", content: "Como Evitar e Tratar a Procrastinação" },
];

function LPWhatLearn() {
  return (
    <div className="lp-what-learn">
    <h2>O Que Você Vai Aprender</h2>
    <p>O curso é composto por 14 módulos detalhados:</p>
    
    <div className="swiper-container-wrapper">
      <Swiper
        modules={[Navigation]}
        spaceBetween={30}
        slidesPerView={2}
        navigation={{
          nextEl: '.custom-swiper-button-next',
          prevEl: '.custom-swiper-button-prev',
        }}
        breakpoints={{
          0: {    // Mobile
            slidesPerView: 1,
            spaceBetween: 20
          },
          600: {  // Tablet pequeno
            slidesPerView: 2,
            spaceBetween: 20
          },
          900: {  // Tablet grande
            slidesPerView: 2,
            spaceBetween: 30
          },
          1200: { // Desktop
            slidesPerView: 2,
            spaceBetween: 40
          }
        }}
        className="lp-what-learn-slider"
      >
        {modulesData.map((module, index) => (
          <SwiperSlide key={index}>
            <div className="lp-what-learn-slide">
              <h3>{module.title}</h3>
              <p>{module.content}</p>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
      
      <div className="custom-swiper-button-prev"></div>
      <div className="custom-swiper-button-next"></div>
    </div>
  </div>
);
}

export default LPWhatLearn;
