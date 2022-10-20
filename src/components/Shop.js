import React, { useState } from "react";

const Shop = () => {
    const item1 = {
        name: "Generic Item",
        Price: "19,99$",
    }

    const item2 = {
        name: "Less Generic Item",
        Price: "24,99$",
    }

    const item3 = {
        name: "Not a Generic Item",
        Price: "29,99$",
    }

    const [itemList, setItemList] = useState([item1,item2,item3]);


    return (
        <div>
        </div>
    )
}

export default Shop;