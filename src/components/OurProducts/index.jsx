import React, { useEffect } from 'react'
import './index.scss'
import { useSelector, useDispatch } from 'react-redux'
import Product from '../Product'
import ProductsServices from '../../services/ProductServices'
import { Header, Table, Rating } from 'semantic-ui-react'

const OurProducts = () => {
  const dispatch = useDispatch()
  const { products, status, error } = useSelector(state => state.product)

  useEffect(() => {
    if (status === 'idle') {
      dispatch(ProductsServices.getAllProducts())
    }
  }, [dispatch])

  if (status === 'loading') {
    return <div>Loading...</div>
  }

  if (status === 'failed') {
    return <div>Error: {error}</div>
  }

  return (
    <div className='datatable'>
      <Table celled padded>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>Title</Table.HeaderCell>
            <Table.HeaderCell>Price</Table.HeaderCell>
            <Table.HeaderCell>Actions</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {products &&
            products.map(item => (
              <Table.Row>
                <Table.Cell>
                  <Header as='h1' textAlign='center'>
                    {item.title}
                  </Header>
                </Table.Cell>
                <Table.Cell as={'h4'} textAlign='center'>
                  {item.price}
                </Table.Cell>
                <Table.Cell textAlign='right'>
                  <button>Remove</button>
                  <button>Update</button>
                  <button>Add To Wishlist</button>
                  <button>Add To Basket</button>
                </Table.Cell>
              </Table.Row>
            ))}
        </Table.Body>
      </Table>
    </div>
  )
}

export default OurProducts
