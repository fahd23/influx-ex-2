import React from "react";
import { useCart } from "../../../context/cart-context";
import "./modifierscard.css";

const ModifiersCard = ({ item }) => {
  const {
    // cartState: { cart },
    cartDispatch,
  } = useCart();
  return (
    <div className="modifiers-card" key={item.id}>
      <img
        className="modifiers-img"
        src={item.fnbs_images[0].imageurl}
        alt={item.fnbs_images[0].description}
      />
      <section key={item.id}>
        <div className="flex js-spce-btwn align-i-c">
          <h2>{item.itemName}</h2>
          <h4>$ {item.strikeValueBeforeTax}</h4>
        </div>

        <p>{item.itemDetails}</p>
      </section>
      <hr />
      {item.modifierGroups[0] && (
        <section key={item.modifierGroups[0].id}>
          <h3>{item.modifierGroups[0].tabName} (optional)</h3>
          {item.modifierGroups[0].modifier_items.map((item) => (
            <div className="flex js-spce-btwn align-i-c " key={item.id}>
              <div>
                <h4>{item.itemName}</h4>
                <p>+ $0.71</p>
              </div>
              <button
                className="cart-management-btn"
                onClick={() =>
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  })
                }
              >
                +
              </button>
            </div>
          ))}
        </section>
      )}
      {item.modifierGroups[0] && <hr />}

      {item.modifierGroups[1] && (
        <section key={item.modifierGroups[1].id}>
          <h3>{item.modifierGroups[1].tabName} (optional)</h3>

          {item.modifierGroups[1].modifier_items.map((item) => (
            <div className="flex js-spce-btwn align-i-c" key={item.id}>
              <div>
                <h4>{item.itemName}</h4>
                <p>+ $0.71</p>
              </div>
              <button
                className="cart-management-btn"
                onClick={() =>
                  cartDispatch({
                    type: "ADD_TO_CART",
                    payload: item,
                  })
                }
              >
                +
              </button>
            </div>
          ))}
        </section>
      )}
      {item.modifierGroups[1] && <hr />}
      {item.smartModifiers.length !== 0 && (
        <section key={item.smartModifiers.id}>
          <div className="flex js-spce-btwn">
            <div className="flex flex-d-clm gap-10px">
              <h4>Optional</h4>
              {item.smartModifiers.map((item) => (
                <h5>{item.itemName}</h5>
              ))}
            </div>
            <div className="flex align-i-c flex-d-clm gap-10px">
              <h4> Remove</h4>
              {item.smartModifiers.map((item) => (
                <input type="radio" name={item.id} />
              ))}
            </div>
            <div className="flex align-i-c flex-d-clm gap-10px">
              <h4>Add as side</h4>
              {item.smartModifiers.map((item) => (
                <input type="radio" name={item.id} />
              ))}
            </div>
          </div>
        </section>
      )}
      <section className="flex flex-d-clm gap-10px">
        <h3>Special Instructions</h3>
        <textarea name="" id="" rows="3"></textarea>
      </section>
      <section className="quantity-section flex js-spce-btwn align-i-c">
        <span>Quantity:</span>
        <div>
          <button className="cart-management-btn">-</button>
          <span> 1 </span>
          <button className="cart-management-btn">+</button>
        </div>
      </section>
      <button
        className="add-to-cart-btn"
        onClick={() =>
          cartDispatch({
            type: "ADD_TO_CART",
            payload: item,
          })
        }
      >
        Add to cart
      </button>
    </div>
  );
};

export default ModifiersCard;
