import React from 'react'
import { useSelector } from 'react-redux'
import WishlistProduct from '../WishlistProduct'
import './index.scss'

const WishlistProducts = () => {
  const wishlist = useSelector(state => state.wishlist.wishlist)
  console.log(wishlist);
  


  return (
    <div>
      <h1>BasketProducts:</h1>
      <div className="wishlist-products">
      {wishlist && wishlist.map(item => (
        <WishlistProduct {...item}  />
      ))}
      </div>
    </div>
  )
}

export default WishlistProducts
