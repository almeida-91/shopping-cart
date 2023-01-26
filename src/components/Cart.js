import React from "react";
import "./cart.css";

let cart = [];
let str = sessionStorage.getItem("currentcart");
console.log(str);
if (str != null) {
  cart = JSON.parse(str);
}

const Cart = () => {
  const cartItems = cart.map((item, index) => (
    <div key={index} className="checkoutTable">
      <p>{item.cartItem.name}</p>
      <p>{item.itemQuantity}</p>
      <p>{item.cartItem.price}</p>
      <p>{item.itemQuantity * item.cartItem.price}</p>
    </div>
  ));
  return (
    <div>
      <div className="checkoutTable checkoutTop">
        <p>Item</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>
      {cartItems}
    </div>
  );
};

export default Cart;
