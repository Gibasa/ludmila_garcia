import "./MarketingCarousel.css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation } from "swiper/modules";
import { useState, useEffect } from "react";
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

  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      const width = window.innerWidth;
      if (width <= 900) {
        setIsMobile(true);
        setIsTablet(false);
      } else if (width <= 1100) {
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
  }, []);
  return (
    <div className="marketing-carousel">
      <h2>Assista os relatos das minhas mentoradas:</h2>
      <Swiper
        modules={[Navigation, Autoplay]}
        slidesPerView={isMobile || isTablet ? 1 : 2}
          navigation={isMobile ? false : true}
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
              allowFullScreen
              width="560" height="315"
            />
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

export default MarketingCarousel;
