import React, { useState } from "react";

function Item({ name, category }) {
  const [isInCart, setIsInCart] = useState(true)

  function handleInCart(){
    setIsInCart(() => !isInCart)
  }
  console.log(isInCart)

  return (
    <li className={isInCart ? "" : "in-cart"}>
      <span>{name}</span>
      <span className="category">{category}</span>
      <button className={isInCart ? "add" : "remove"} onClick={handleInCart} >{isInCart ? "Add to Cart" : "Remove From Cart"}</button>
    </li>
  );
}

export default Item;
