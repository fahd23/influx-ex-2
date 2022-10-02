import React, { useState } from "react";
import { useCart } from "../../context/cart-context";
import ModifiersCard from "./ModifiersCard/ModifiersCard";
import "./itemcard.css";

const ItemCollapsed = ({ item }) => {
  const {
    cartState: { cart },
    cartDispatch,
  } = useCart();
  const [modal, setModal] = useState(false);
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
                  item.modifierGroups.length === 0 &&
                    cartDispatch({
                      type: "ADD_TO_CART",
                      payload: item,
                    });
                  item.modifierGroups.length !== 0 &&
                    setModal((state) => !state);
                }}
              >
                {cart.find((i) => i.product.id === item.id)
                  ? "Remove"
                  : "Add +"}
              </button>
              <p>To Be Picked-up</p>
            </div>
          </div>
        </div>
      </div>
      <hr />
      <div className={modal ? "modifiers-modal" : "display-none"}>
        {item.modifierGroups.length !== 0 && <ModifiersCard item={item} />}
      </div>
    </div>
  );
};

export default ItemCollapsed;
