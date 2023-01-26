import React from "react";

let cart = [];
let str = sessionStorage.getItem("currentcart");
console.log(str);
if (str != null) {
  cart = JSON.parse(str);
}

const Cart = () => {
  console.log(cart);
  const cartItems = cart.map((item, index) => (
    <div key={index}>
      <p>{item.name}</p>
    </div>
  ));
  return <div>{cartItems}</div>;
};

export default Cart;
