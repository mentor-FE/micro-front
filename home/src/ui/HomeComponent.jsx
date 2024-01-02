import React, { useState, useEffect } from 'react'
import { getProducts, currency } from '../products'

const HomeComponent = () => {
  const [products, setProduct] = useState([])
  useEffect(() => {
    getProducts().then(setProduct)
  }, [])

  return <div className='grid grid-cols-4 gap-5'>{
    products.map(product => (
      <div key={product.id}>
        <img src={product.image} alt={product.name}/>
      </div>
    ))
  }</div>
}

export default HomeComponent
