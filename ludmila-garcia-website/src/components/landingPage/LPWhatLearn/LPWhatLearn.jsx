import "./LPWhatLearn.css";
// import { useState, useEffect } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modulesData = [
  { title: "Módulo 1", content: "Introdução ao Curso CEO" },
  { title: "Módulo 2", content: "Aula Bônus: Compulsão Alimentar" },
  { title: "Módulo 3", content: "Aula Bônus: Precificação" },
  { title: "Módulo 4", content: "Aula Bônus: Como Vender na Internet" },
  { title: "Módulo 5", content: "Anamnese Protocolo CEO" },
  { title: "Módulo 6", content: "Comer com Atenção Plena" },
  { title: "Módulo 7", content: "Fome Física x Fome Emocional" },
  { title: "Módulo 8", content: "Saciedade x Satisfação" },
  { title: "Módulo 9", content: "Acompanhamento de Progresso" },
  { title: "Módulo 10", content: "Estratégias Cognitivas Comportamentais" },
  {
    title: "Módulo 11",
    content: "Preparação para Alta e Resolução de Problemas",
  },
  {
    title: "Módulo 12",
    content: "Prevenção de Recaídas e Revisão do Tratamento",
  },
  {
    title: "Módulo 13",
    content: "Revisão do Tratamento e Manutenção dos Resultados",
  },
  { title: "Módulo 14", content: "Como Evitar e Tratar a Procrastinação" },
];

function LPWhatLearn() {
  // const [isMobile, setIsMobile] = useState(false);

  // useEffect(() => {
  //   const handleResize = () => {
  //     const width = window.innerWidth;
  //     if (width <= 599) {
  //       setIsMobile(true);
  //     } else {
  //       setIsMobile(false);
  //     }
  //   };

  //   window.addEventListener("resize", handleResize);

  //   handleResize();

  //   return () => {
  //     window.removeEventListener("resize", handleResize);
  //   };
  // });
  return (
    <div className="lp-what-learn">
      <Swiper
        modules={[Pagination, Navigation, Autoplay]}
        spaceBetween={20}
        slidesPerView={2}
        pagination={{ clickable: false }}
        navigation={{
          true: false,
        }}
        // autoplay={{ delay: 2000 }}
        // loop={true}
        className="lp-what-learn-slide-container"
      >
        {modulesData.map((module, index) => (
          <SwiperSlide className="lp-what-learn-slide" key={index}>
            <h3>{module.title}</h3>
            <p>{module.content}</p>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default LPWhatLearn;
