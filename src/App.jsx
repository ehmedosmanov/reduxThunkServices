import { useState } from 'react'
import 'semantic-ui-css/semantic.min.css'
import './App.css'
import AddProduct from './components/AddProduct'
import OurProducts from './components/OurProducts'
import WishlistProducts from './components/WishlistProducts'

function App() {
  return (
    <>
      <AddProduct />
      <OurProducts />
      <WishlistProducts />
    </>
  )
}

export default App
