import "./LPTestimonialVideo.css";

function LPTestimonialVideo() {
  return (
    <div className="lp-testimonial-container">
      <h3 className="lp-testimonial-title">Veja o que diz nossa aluna:</h3>
      
      <div className="lp-video-testimonial-wrapper">
        <video 
          src="/images/depoimento-lud.mp4"
          className="lp-testimonial-video"
          controls
          playsInline
        />
      </div>
    </div>
  );
}

export default LPTestimonialVideo;
