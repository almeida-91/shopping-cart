import React, { useState } from "react";

const Shop = () => {
    const item1 = {
        name: "Generic Item",
        price: "19,99$",
    }

    const item2 = {
        name: "Less Generic Item",
        price: "24,99$",
    }

    const item3 = {
        name: "Not a Generic Item",
        price: "29,99$",
    }

    const [itemList, setItemList] = useState([item1,item2,item3]);
    const listItems = itemList.map((item)=>
    <div>
        <li>{item.name}</li>
        <li>{item.price}</li>
    </div>)

    return (
        <div>
            {listItems}
        </div>
    )
}

export default Shop;