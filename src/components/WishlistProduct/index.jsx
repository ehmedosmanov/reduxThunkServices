import React from "react";
import './index.scss'
const WishlistProduct = ({ id, title, price }) => {
  return (
    <div className="wishlist-product">
      <h3>{title}</h3>
      <span>{price}</span>
      <button>Remove</button>
    </div>
  );
};

export default WishlistProduct;
