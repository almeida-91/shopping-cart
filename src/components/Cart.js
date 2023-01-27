import React from "react";
import "./cart.css";

const Cart = () => {
  let cart = [];
  let str = sessionStorage.getItem("currentcart");

  if (str != null) {
    cart = JSON.parse(str);
  }

  let total = 0;

  for (let i = 0; i < cart.length; i++) {
    total += cart[i].cartItem.price * cart[i].itemQuantity;
  }

  const cartItems = cart.map((item, index) => (
    <div key={index} className="checkoutTable">
      <p>{item.cartItem.name}</p>
      <p>{item.itemQuantity}</p>
      <p>{item.cartItem.price}$</p>
      <p>{(item.itemQuantity * item.cartItem.price).toFixed(2)}$</p>
    </div>
  ));

  let topRow;
  if (cart.length === 0) {
    topRow = (
      <div className="emptyCart checkoutTop checkoutTable">
        <p>Your Cart is Empty.</p>
      </div>
    );
  } else {
    topRow = (
      <div className="checkoutTable checkoutTop">
        <p>Item</p>
        <p>Quantity</p>
        <p>Price</p>
        <p>Total</p>
      </div>
    );
  }

  return (
    <div>
      {topRow}
      {cartItems}
      <div className="checkoutTable totalRow">
        <p>Order Total:</p>
        <p>{total}$</p>
      </div>
    </div>
  );
};

export default Cart;
