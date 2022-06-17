import React from "react";
import Pictures from "./Pictures";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import MenuMain from "./MenuMain";
const MenuPage = ({ setItemsInCarts,prodcuts, userName }) => {
  const [countItems, setCountItems] = useState(0);
  const nav = useNavigate();
  return (
    <div>
      <h1 id="titleTag">hello {userName}!</h1>
      {prodcuts.map((val, index) => {
        return (
          <MenuMain
          setItemsInCarts = {setItemsInCarts}
            setCountItems={setCountItems}
            index={index}
            key={index}
            product={val.product}
            price={val.price}
            info={val.info}
            img={Pictures[index]}
          />
        );
      })}
      <button
        onClick={() => {
          countItems > 1 ? nav("/burger_menu/cart") : alert("empty");
        }}
        id="shoppingCartBtn"
      >
        {countItems == 0 ? "Cart" : `Cart ${countItems}`}
      </button>
    </div>
  );
};

export default MenuPage;
