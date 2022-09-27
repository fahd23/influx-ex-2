import React from "react";
import "./cartcard.css";

const CartCard = () => {
  return (
    <div className="cart-card">
      <h2 className="title">Your Cart</h2>
      <i className="fa-solid fa-cart-shopping cart-img"></i>
      <p className="cart-desc">Cart is empty. Select a category to add food.</p>
    </div>
  );
};

export default CartCard;
