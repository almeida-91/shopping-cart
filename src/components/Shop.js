import React, { useEffect, useState } from "react";

const Shop = () => {
  const item1 = {
    name: "Generic Item",
    price: 19.99,
  };

  const item2 = {
    name: "Less Generic Item",
    price: 24.99,
  };

  const item3 = {
    name: "Not a Generic Item",
    price: 29.99,
  };

  const addItemToCart = (item, quant) => {
    if (quant < 1) {
      alert("Quantity must be equal to or greater than 1");
      return;
    }
    if (ItemIsInCart(item) === false) {
      let itemToCart = {
        cartItem: item,
        itemQuantity: quant,
      };
      setShopCart(shopCart.concat(itemToCart));
    } else {
      updateCart(item, quant);
    }
    setQuantity(1);
  };

  const updateCart = (item, quant) => {
    const newShopCart = shopCart.map((currentCartItem) => {
      if (item === currentCartItem.cartItem) {
        const currentQuant = currentCartItem.itemQuantity;
        return {
          cartItem: item,
          itemQuantity: +currentQuant + +quant,
        };
      }
      return currentCartItem;
    });
    setShopCart(newShopCart);
  };

  const ItemIsInCart = (item) => {
    if (shopCart.length === 0) return false;
    else {
      for (let i = 0; i < shopCart.length; i++) {
        if (shopCart[i].cartItem === item) return true;
      }
    }
    return false;
  };

  const handleQuantityChange = (e) => {
    setQuantity(e.target.value);
  };

  const [itemList, setItemList] = useState([item1, item2, item3]);
  const [quantity, setQuantity] = useState(1);
  const [shopCart, setShopCart] = useState([]);

  const listItems = itemList.map((item) => (
    <div>
      <li>{item.name}</li>
      <li>{item.price + "$"}</li>
      <label htmlFor="numberOfItems">How many?</label>
      <input
        type="number"
        name="numberOfItems"
        pattern="[1-9]"
        defaultValue={1}
        onChange={handleQuantityChange}
      ></input>
      <button
        onClick={() => {
          addItemToCart(item, quantity);
        }}
      >
        Add to cart
      </button>
    </div>
  ));

  return (
    <div>
      <div>
        Shopping Cart: {shopCart.length} <button>Checkout</button>
      </div>
      <div>{listItems}</div>
    </div>
  );
};

export default Shop;
