import { createSlice } from '@reduxjs/toolkit'

const initialState = {
  wishlist: []
}

export const wishlistSlice = createSlice({
  name: 'wishlist',
  initialState,
  reducers: {
    addToWishlist: (state, action) => {
      state.wishlist.push(action.payload)
    }
  }
})

export const { addToWishlist } = wishlistSlice.actions
export default wishlistSlice.reducer
