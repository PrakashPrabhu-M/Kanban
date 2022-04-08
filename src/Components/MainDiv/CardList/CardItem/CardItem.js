import React from "react";

import "./CardItem.css";

const CardItem = (props) => {
  return (
    <div className="card" draggable>
      <h3>{props.name}</h3>
      <p>{props.phone}</p>
      <div className="rating">
        <p>⭐⭐⭐⭐⭐</p>
      </div>
    </div>
  );
};

export default CardItem;
