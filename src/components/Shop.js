import React, { useState } from "react";

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
      alert("Quantity must be greater than 1");
      return;
    }
    let itemToCart = {
      cartItem: item,
      itemQuantity: quant,
    };
    setShopCart(shopCart.concat(itemToCart));
    setQuantity(0);
  };

  const handleQuantityChange = (e) => {
    if (e.target.value < 1) return;
    setQuantity(e.target.value);
  };

  const [itemList, setItemList] = useState([item1, item2, item3]);
  const [quantity, setQuantity] = useState(0);

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

  const [shopCart, setShopCart] = useState([]);

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
