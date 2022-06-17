import React from "react";

const Cart = ({ itemsInCart }) => {
    let total = 0
  return (
    <div className="itemsContainer">
      {itemsInCart.map((val, index) => {
        total += val.price
        return (
          <div key={index} className="containerSpesific">
            <div className="Items">
              {val.info} {val.price}  
           
            </div>
          </div>
        );
      })}
      <div className="total">total is {total}</div>
      <button id="paymentBtn">pay?</button>
    </div>
  );
};

export default Cart;
