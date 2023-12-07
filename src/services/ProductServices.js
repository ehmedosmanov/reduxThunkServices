import { createAsyncThunk } from '@reduxjs/toolkit'
import axios from 'axios'

const apiUrl = 'http://localhost:3000/popularMenu'

const getAllProducts = createAsyncThunk('products/getAllProducts', async () => {
  try {
    const res = await axios.get(apiUrl)
    console.log(res);
    return res.data
  } catch (error) {
    console.log('Error Fethcing', error)
    throw error
  }
})

const getProductById = createAsyncThunk(
  'products/getProductById',
  async productId => {
    try {
      const res = await axios.get(`${apiUrl}/${productId}`)
      return res.data
    } catch (error) {
      console.log('Error Fetching', error)
      throw error
    }
  }
)

const addProduct = createAsyncThunk('products/addProduct', async product => {
  try {
    const res = await axios.post(apiUrl, product)
    return res.data
  } catch (error) {
    console.log('Error Fetching', error)
    throw error
  }
})

const ProductsServices = {
  getAllProducts,
  getProductById,
  addProduct
}

export default ProductsServices
