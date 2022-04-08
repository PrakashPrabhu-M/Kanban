import React from "react";

import "./Button.css";

const Button = (props) => {
  return (
    <button className="button">
      {props.startIcon}{props.text}{props.endIcon}
    </button>
  );
};

export default Button;
