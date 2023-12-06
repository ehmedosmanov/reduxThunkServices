import React from 'react'
import { useDispatch } from 'react-redux'
import { addToWishlist } from '../../features/wishlist/wishlistSlice'

const Product = ({ id, name, price, product }) => {
  const dispatch = useDispatch()
  return (
    <div className='product'>
      <h3>{name}</h3>
      <span>${price}</span>
      <button onClick={() => dispatch(addToWishlist(product))}>
        Add To Wishlist
      </button>
    </div>
  )
}

export default Product
