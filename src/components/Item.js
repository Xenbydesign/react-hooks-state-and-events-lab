import React, { useState } from "react";

function Item({ name, category }) {
  const [inCart, setInCart] = useState(false);

  function handleCartToggle(){
    setInCart((prevInCart)=> !prevInCart);
  }
  const itemClass = inCart ? "in-cart" : "";
  const buttonText = inCart ? "Remove From Cart" : "Add to Cart"

  return (
    <li className={itemClass}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className="add" onClick={handleCartToggle}>{buttonText}</button>
    </li>
  );
}

export default Item;
