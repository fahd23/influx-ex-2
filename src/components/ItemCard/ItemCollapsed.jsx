import React from "react";
import { useCart } from "../../context/cart-context";

const ItemCollapsed = ({ item }) => {
  const { cartDispatch } = useCart();
  return (
    <div>
      <div className="items-collapsed" key={item.id}>
        <div className="img-section">
          <img
            className="item-img"
            src={item.fnbs_images[0].imageurl}
            alt="popup"
          />
        </div>
        <div className="item-desc">
          <div>
            <h2>{item.itemName}</h2>
            <p className="grey-text">{item.itemDetails}</p>
          </div>
          <div className="item-desc-footer">
            <p>$ {item.valuebeforetax}</p>
            <div className="btn-section">
              <button
                className="addcart-btn"
                onClick={() => {
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  });
                }}
              >
                Add +
              </button>
              <p>To Be Picked-up</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default ItemCollapsed;
