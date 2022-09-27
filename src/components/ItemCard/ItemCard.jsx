import React, { useState } from "react";
import "./itemcard.css";
import ItemCollapsed from "./ItemCollapsed";

const ItemCard = ({ item }) => {
  const [collapsed, setCollapsed] = useState(false);
  return (
    <div className="card-container" key={item.id}>
      <img
        className="card-img"
        src={item.fnbtabs_images[0].imageurl}
        alt={item.fnbtabs_images[0].description}
      />
      <div className="card-footer">
        <p className="item-name">{item.tabName}</p>
        <i
          className={
            collapsed ? `fa-solid fa-chevron-up` : `fa-solid fa-chevron-down`
          }
          onClick={() => setCollapsed((state) => !state)}
        ></i>
      </div>
      {collapsed && (
        <div>
          {item.fnbtabs_items.map((item) => (
            <ItemCollapsed item={item} />
          ))}
        </div>
      )}
    </div>
  );
};

export default ItemCard;
