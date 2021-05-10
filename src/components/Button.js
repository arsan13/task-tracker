import PropTypes from "prop-types";

const Button = ({ color, text, onClick }) => {
  return (
    <button
      onClick={onClick}
      className="btn"
      style={{ backgroundColor: color }}
    >
      {text}
    </button>
  );
};

Button.defaultPropType = {
  color: "steelblue",
  text: "Click",
};

Button.prototype = {
  color: PropTypes.text,
  text: PropTypes.text,
  onClick: PropTypes.func,
};

export default Button;
