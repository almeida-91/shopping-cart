import React, { useEffect, useState } from "react";
import "./shop.css";

const Shop = () => {
  const item1 = {
    name: "Generic Item",
    price: 19.99,
    picture:
      "https://assets.onegoodthingbyjillee.com/2015/04/8tbmzDji-Generic-vs-Brand-name-8.jpg",
  };

  const item2 = {
    name: "Less Generic Item",
    price: 24.99,
    picture:
      "https://assets.onegoodthingbyjillee.com/2015/04/ZburNUFR-generic.jpg",
  };

  const item3 = {
    name: "Not a Generic Item",
    price: 29.99,
    picture:
      "https://assets.onegoodthingbyjillee.com/2015/04/u2k9KD2o-Generic-vs-Brand-name-7.jpg",
  };

  const addItemToCart = (item, quant) => {
    let newShopCart = [...shopCart];
    if (quant < 1) {
      alert("Quantity must be equal to or greater than 1");
      return;
    }
    if (ItemIsInCart(item) === false) {
      let itemToCart = {
        cartItem: item,
        itemQuantity: quant,
      };
      newShopCart.push(itemToCart);
      setShopCart(newShopCart);
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

  const totalItemsInCart = () => {
    const total = shopCart.reduce((a, b) => a + +b.itemQuantity, 0);
    setTotalItems(total);
  };

  const [itemList] = useState([item1, item2, item3]);
  const [quantity, setQuantity] = useState(1);
  const [shopCart, setShopCart] = useState([]);
  const [total, setTotal] = useState(0);
  const [totalItems, setTotalItems] = useState(0);

  const orderTotal = () => {
    let sum = 0;
    for (let i = 0; i < shopCart.length; i++) {
      sum += +shopCart[i].cartItem.price * +shopCart[i].itemQuantity;
    }
    setTotal(sum);
  };

  useEffect(() => {
    orderTotal();
    totalItemsInCart();
  });

  const listItems = itemList.map((item, index) => (
    <div className="item" key={index}>
      <p>{item.name}</p>
      <img
        className="productImg"
        src={item.picture}
        alt={item.name + " picture"}
      />
      <p className="priceText">Price: {item.price + "$"}</p>
      <div>
        <form
          onSubmit={(event) => {
            event.preventDefault();
            addItemToCart(item, quantity);
            setQuantity(1);
            event.target.reset();
          }}
        >
          <div className="quantBar">
            <input
              type="number"
              name="numberOfItems"
              pattern="[1-9]"
              min="1"
              defaultValue={quantity}
              onChange={(e) => {
                setQuantity(e.target.value);
              }}
            ></input>
            <button type="submit">Purchase</button>
          </div>
        </form>
      </div>
    </div>
  ));

  return (
    <div className="shopContainer">
      <div className="cartBar">
        <span>Shopping Cart: {totalItems}</span>
        <span>
          Order Total: {total.toFixed(2)}$<button>Checkout</button>
        </span>
      </div>
      <div className="itemList">{listItems}</div>
    </div>
  );
};

export default Shop;
