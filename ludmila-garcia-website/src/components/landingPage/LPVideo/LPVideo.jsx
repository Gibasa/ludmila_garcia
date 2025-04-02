import "./LPVideo.css";

function LPVideo() {
  return (
    <div className="lp-video-container">
      <h2>Conheça o Protocolo CEO</h2>
      <div className="lp-video-wrapper">
        <iframe
          src="https://www.youtube.com/embed/IYn6AX1fXG4?si=EM4LkfmCGQF4hcpK"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowfullscreen
        ></iframe>
      </div>
    </div>
  );
}

export default LPVideo;
