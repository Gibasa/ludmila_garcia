import "./MarketingCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

function MarketingCarousel() {
  const videos = [
    "https://www.youtube.com/embed/J-bEVTp2irs?si=XwiMf2qofA_QE5JF",
    "https://www.youtube.com/embed/QTTRe5DctVE?si=nv2Fn7GYNVnzS6AD",
    "https://www.youtube.com/embed/Zxgxr4twWXo?si=J6v4UmIkGk4HfSCV",
    "https://www.youtube.com/embed/Vc-pKkQjde0?si=1t_TnOpZ-ErhAwsD",
    "https://www.youtube.com/embed/RNjeNfopg3k?si=_D5pLvJVDAQoWGrG",
    "https://www.youtube.com/embed/7MySS4YiXPs?si=O1ECNWIKFxSf_XJU",
    "https://www.youtube.com/embed/WbuTWudP3Pg?si=m7bqF7cflxNQiPqa",
  ];
  return (
    <div className="marketing-carousel">
      <h2>Assista os relatos das minhas mentoradas:</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={2}
        navigation
        pagination={{ clickable: true }}
        autoplay={{ delay: 20000 }}
        loop={true}
      >
        {videos.map((n) => (
          <SwiperSlide key={n}>
            <iframe
              src={n}
              alt={`video ${n}`}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
              allowfullscreen
              width="560" height="315"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MarketingCarousel;
