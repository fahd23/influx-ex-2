import React from "react";
import "./homepage.css";

import CartCard from "../../components/CartCard/CartCard";
import CategoriesTabBtn from "../../components/CategoriesTabBtn/CategoriesTabBtn";
import ItemCard from "../../components/ItemCard/ItemCard";

import data from "../../db/data";

const HomePage = () => {
  return (
    <div>
      <div className="tab-btn">
        {data.map((item) => (
          <CategoriesTabBtn item={item} key={item.id} />
        ))}
      </div>
      <div className="main-section">
        <div>
          {data.map((item) => (
            <ItemCard item={item} key={item.id} />
          ))}
        </div>
        <CartCard />
      </div>
    </div>
  );
};

export default HomePage;
