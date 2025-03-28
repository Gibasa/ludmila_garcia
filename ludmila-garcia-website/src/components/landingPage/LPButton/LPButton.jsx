import "./LPButton.css";
import PropTypes from "prop-types";

function LPButton({children, color}) {
  return <button className={`lp-button lp-bg-${color}`}>{children}</button>;
}

export default LPButton;


LPButton.propTypes = {
  children: PropTypes.node.isRequired,
  color: PropTypes.string, 
};