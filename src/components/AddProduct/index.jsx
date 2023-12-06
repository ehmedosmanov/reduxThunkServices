import { Button, Checkbox, Form } from 'semantic-ui-react'
import { useSelector, useDispatch } from 'react-redux'
import './index.scss'
import { useEffect, useState } from 'react'
import ProductsServices from '../../services/ProductServices'

const AddProduct = () => {
  const dispatch = useDispatch()
  const [product, setProduct] = useState({ title: '', price: 0 })

  const handleInputChange = e => {
    setProduct({ ...product, [e.target.name]: e.target.value })
  }

  const handleSubmit = e => {
    e.preventDefault()
    dispatch(ProductsServices.addProduct(product))
    setProduct({ title: '', price: 0 })
  }

  return (
    <div
      className='form-data
'>
      <Form onSubmit={handleSubmit}>
        <Form.Field>
          <label>Name</label>
          <input
            onChange={handleInputChange}
            value={product.title}
            name='title'
            placeholder='Name'
          />
        </Form.Field>
        <Form.Field>
          <label>Price</label>
          <input
            onChange={handleInputChange}
            name='price'
            value={product.price}
            placeholder='Price'
            type='number'
          />
        </Form.Field>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default AddProduct
