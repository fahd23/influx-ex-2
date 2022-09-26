import React from "react";
import "./itemcard.css";

const ItemCard = () => {
  return (
    <div className="card-container">
      <img
        className="card-img"
        src="https://spi-assets-01.s3.us-east-2.amazonaws.com/images/platforms/51554d3a-67ee-41c9-be23-5dbda46a5b48.png"
        alt="item"
      />
      <div className="card-footer">
        <p className="item-name">Popcorn</p>
        <p className="down-arrow">{">"}</p>
      </div>
    </div>
  );
};

export default ItemCard;
