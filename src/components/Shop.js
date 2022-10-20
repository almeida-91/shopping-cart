import React, { useState } from "react";

const Shop = () => {
  const item1 = {
    name: "Generic Item",
    price: "19,99$",
  };

  const item2 = {
    name: "Less Generic Item",
    price: "24,99$",
  };

  const item3 = {
    name: "Not a Generic Item",
    price: "29,99$",
  };

  const [itemList, setItemList] = useState([item1, item2, item3]);
  const listItems = itemList.map((item) => (
    <div>
      <li>{item.name}</li>
      <li>{item.price}</li>
      <label htmlFor="numberOfItems">How many?</label>
      <input type="number" name="numberOfItems"></input>
      <button>Add to cart</button>
    </div>
  ));

  const [shopCart, setShopCart] = useState({
    numberOfItemsInCart: 0,
    items: [],
  });

  return (
    <div>
        <div>Shopping Cart: {shopCart.numberOfItemsInCart}</div>
        <div>{listItems}</div>
    </div>
  );
};

export default Shop;
