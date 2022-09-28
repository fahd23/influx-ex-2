import React from "react";
import { useCart } from "../../context/cart-context";
import "./cartcard.css";

const CartCard = () => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const priceDetailsReducer = (acc, cur) => {
    return cart.length
      ? {
          ...acc,
          subtotal:
            acc.subtotal +
            Number(cur.product.valuebeforetax) * Number(cur.quantity),
          tax: acc.tax + Number(cur.product.taxValue) * Number(cur.quantity),
          total:
            acc.total +
            Number(cur.product.valuebeforetax) * Number(cur.quantity) +
            Number(cur.product.taxValue) * Number(cur.quantity),
        }
      : acc;
  };

  const toatlPriceDetails = cart.reduce(priceDetailsReducer, {
    subtotal: 0,
    tax: 0,
    total: 0,
  });

  return cart.length !== 0 ? (
    <div className="cart-card">
      <h2 className="summary-title ">Order Summary</h2>
      {cart?.map((item) => (
        <div className="padding-10px " key={item.id}>
          <div className="flex js-spce-btwn">
            <p>{item.product.itemName}</p>
            <div>
              <button
                className="cart-management-btn"
                onClick={() => {
                  cartDispatch({
                    type: "DEC_CART_QUANTITY",
                    payload: item.product,
                  });
                }}
              >
                -
              </button>
              {` ${item.quantity} `}
              <button
                className="cart-management-btn"
                onClick={() => {
                  cartDispatch({
                    type: "INC_CART_QUANTITY",
                    payload: item.product,
                  });
                }}
              >
                +
              </button>
            </div>
            <p>
              {item.product.valuebeforetax}{" "}
              <button
                className="cancel-btn"
                onClick={() => {
                  cartDispatch({
                    type: "REMOVE_FROM_CART",
                    payload: item.product,
                  });
                }}
              >
                x
              </button>
            </p>
          </div>
        </div>
      ))}
      <hr />
      <div className="padding-10px">
        <div className="flex js-spce-btwn">
          <p>Sub Total</p>
          <p>$ {toatlPriceDetails.subtotal.toFixed(2)}</p>
        </div>
        <div className="flex js-spce-btwn">
          <p>Tax</p>
          <p>$ {toatlPriceDetails.tax.toFixed(2)}</p>
        </div>
      </div>
      <hr />
      <div className="flex js-spce-btwn padding-10px">
        <h3>Total</h3>
        <p>$ {toatlPriceDetails.total.toFixed(2)}</p>
      </div>
    </div>
  ) : (
    <div className="cart-card empty-card">
      <h2 className="title">Your Cart</h2>
      <i className="fa-solid fa-cart-shopping cart-img"></i>
      <p className="cart-desc">Cart is empty. Select a category to add food.</p>
    </div>
  );
};

export default CartCard;
