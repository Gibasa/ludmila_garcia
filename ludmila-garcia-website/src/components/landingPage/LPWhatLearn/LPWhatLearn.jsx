import "./LPWhatLearn.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

const modulesData = new Array(14).fill(null);

function LPWhatLearn() {
  return (
    <div className="lp-what-learn">
      <div className="lp-what-learn-text">
        <h2>O que você vai aprender?</h2>
        <p>
          Nossos 14 módulos foram cuidadosamente estruturados para te guiar
          passo a passo, desde o diagnóstico até a prevenção de recaídas. Com
          uma abordagem baseada em neurociência e terapia
          cognitivo-comportamental, você terá as ferramentas certas para atender
          seus pacientes com segurança, confiança e resultados duradouros.
        </p>
      </div>
      <div className="swiper-container-wrapper">
        <Swiper
          modules={[Navigation, Autoplay]}
          spaceBetween={30}
          loop={true}
          autoplay={{
            delay: 3000,
            disableOnInteraction: false,
            pauseOnMouseEnter: true,
          }}
          navigation={{
            nextEl: ".custom-swiper-button-next",
            prevEl: ".custom-swiper-button-prev",
          }}
          breakpoints={{
            0: {
              slidesPerView: 2,
              spaceBetween: 16,
            },
            768: {
              slidesPerView: 2,
              spaceBetween: 0,
            },
            1024: {
              slidesPerView: 3,
              spaceBetween: 30,
            },
          }}
          className="lp-what-learn-slider"
        >
          {modulesData.map((_, index) => (
            <SwiperSlide key={index}>
              <div className="lp-what-learn-slide">
                <img
                  src={`/images/modulo-${index + 1}.png`}
                  alt={`Módulo ${index + 1}`}
                  className="lp-what-learn-image"
                />
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
