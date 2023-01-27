import React, { useEffect, useState } from "react";
import "./cart.css";

const Cart = () => {
  let cart = [];
  let str = sessionStorage.getItem("currentcart");

  const [isCartEmpty, setIsCartEmpty] = useState(false);

  if (str != null) {
    cart = JSON.parse(str);
  } else {
    setIsCartEmpty(true);
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

  const pay = () => {
    if (cart.length === 0) return;
    cart = JSON.stringify([]);
    sessionStorage.setItem("currentcart", cart);
    cart = [];
    setIsCartEmpty(true);
    alert("thanks!");
  };

  let orderTotal;
  let topRow;

  if (cart.length === 0) {
    topRow = (
      <div id="emptyCart" className="checkoutTop checkoutTable">
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
    orderTotal = (
      <div className="checkoutTable totalRow">
        <p>Order Total:</p>
        <p>{total}$</p>
      </div>
    );
  }

  useEffect(() => {}, [cart, isCartEmpty]);

  return (
    <div>
      {topRow}
      {cartItems}
      {orderTotal}
      <button className="payButton" onClick={pay}>
        Pay
      </button>
    </div>
  );
};

export default Cart;
