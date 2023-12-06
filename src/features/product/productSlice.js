import { createSlice } from '@reduxjs/toolkit'
import ProductsServices from '../../services/ProductServices'

const initialState = {
  products: [],
  product: null,
  status: 'idle',
  error: null
}

export const productSlice = createSlice({
  name: 'product',
  initialState,
  reducers: {},
  extraReducers: builder => {
    builder
      .addCase(ProductsServices.getAllProducts.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.products = action.payload
      })
      .addCase(ProductsServices.getAllProducts.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(ProductsServices.getAllProducts.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(ProductsServices.getProductById.fulfilled, (state, action) => {
        state.status = 'succeeded'
        state.product = action.payload
      })
      .addCase(ProductsServices.getProductById.pending, (state, action) => {
        state.status = 'loading'
      })
      .addCase(ProductsServices.getProductById.rejected, (state, action) => {
        state.status = 'failed'
        state.error = action.error.message
      })
      .addCase(ProductsServices.addProduct.fulfilled, (state, action) => {
        state.state = 'succeeded'
        state.products = [...state.products, action.payload]
      })
      .addCase(ProductsServices.addProduct.pending, (state, action) => {
        state.state = 'loading'
      })
      .addCase(ProductsServices.addProduct.rejected, (state, action) => {
        state.state = 'failed'
        state.error = action.error.message
      })
  }
})

export default productSlice.reducer
