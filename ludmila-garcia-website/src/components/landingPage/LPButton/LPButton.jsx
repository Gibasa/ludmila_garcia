import "./LPButton.css";
import PropTypes from "prop-types";

function LPButton({ children, color }) {
  const handleClick = () => {
    window.open(
      "https://hotmart.com/pt-br/marketplace/produtos/curso-de-compulsao-alimentar-emagrecimento-e-obesidade/A96139945D", 
      "_blank"
    );
  };

  return (
    <button 
      className={`lp-button lp-bg-${color}`}
      onClick={handleClick}
    >
      {children}
    </button>
  );
}

LPButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.oneOf(["purple", "blue"]), 
};

export default LPButton;
