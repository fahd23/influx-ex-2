import React from "react";
import "./cartcard.css";

const CartCard = () => {
  return true ? (
    <div className="cart-card">
      <h2 className="summary-title ">Order Summary</h2>
      <div className="padding-10px ">
        <div className="flex js-spce-btwn">
          <p>Kids pack 1</p>
          <div>
            <button className="cart-management-btn">-</button> 1{" "}
            <button className="cart-management-btn">+</button>
          </div>
          <p>
            $ 5.00 <button className="cancel-btn">x</button>
          </p>
        </div>
      </div>

      <hr />
      <div className="padding-10px">
        <div className="flex js-spce-btwn">
          <p>Sub Total</p>
          <p>$ 5.00</p>
        </div>
        <div className="flex js-spce-btwn">
          <p>Tax</p>
          <p>$ 0.25</p>
        </div>
      </div>

      <hr />
      <div className="flex js-spce-btwn padding-10px">
        <h3>Total</h3>
        <p>$ 5.25</p>
      </div>
    </div>
  ) : (
    <div className="cart-card">
      <h2 className="title">Your Cart</h2>
      <i className="fa-solid fa-cart-shopping cart-img"></i>
      <p className="cart-desc">Cart is empty. Select a category to add food.</p>
    </div>
  );
};

export default CartCard;
